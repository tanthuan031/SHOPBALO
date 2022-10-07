import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PaginationUI from '../../../components/Layouts/Pagination';
import Skeleton from '../../../components/Layouts/Skeleton';
import FilterStatus from '../../../components/Staff/FilterStatus';
import { Button } from 'react-bootstrap';
import { BlockUI } from '../../../components/Layouts/Notiflix';
import { setIsAdd } from '../../../redux/reducer/customer/customer.reducer';
import Notiflix from 'notiflix';
import { isAddCustomerSelector, isEditCustomerSelector, } from '../../../redux/selectors';
import SearchWithDropdownOptions from '../../../components/Layouts/SearchWithDropdownOptions/SearchWithDropdownOptions';
import { CustomerTable } from '../../../components/Customer';
import { customer_table_header } from '../../../asset/data/customer_table_header';
import { getAllCustomers } from '../../../api/Customer/customerAPI';
import CustomerAdd from '../../../components/Customer/Add';
import CustomerEdit from '../../../components/Customer/Edit';


export function CustomerPage(props) {
  const data_customer_table_header = [...customer_table_header];
  const [data,setData]=React.useState([])
  // Pagination
  const [perPage,setPerPage] = React.useState(8)
  const [totalPage,setTotalPage] = React.useState(0)
  const [totalRecord,setTotalRecord] = React.useState(0)
  const [page,setPage] = React.useState(1)

  //Filter & Search
  const [filter,setFilter] = React.useState('fullname')
  const [search,setSearch]=React.useState([])
  const [filterStatus,setFilterStatus]=React.useState('All')
  const data_options_filter=[
    { id: 1, name: 'All',value: 'All' },
    { id: 2, name: 'Active',value: 1 },
    { id: 3, name: 'Disable',value: 0 },
  ]
  //Redux
  const isAddCustomer=useSelector(isAddCustomerSelector)
  const isEditCustomer=useSelector(isEditCustomerSelector)
  const dispatch = useDispatch();
  //Loading
  const [loading, setLoading] = React.useState(true);
  //Logic

  React.useEffect(() => {
    let params={}
    if (filterStatus!=='All') params={...params,filterStatus}
    if(search !=='') params={...params,filter,search}
    const handleGetAllCustomers = async () => {
      const result = await getAllCustomers(params)
      if (result === 401) {
        return false;
      } else if (result === 500) {
        return false;
      } else {
        setCustomer(result, 'reset-page');
      }
      setLoading(false);
    };
    handleGetAllCustomers();
  }, [dispatch,search,filterStatus]);

  const setCustomer = (result, value) => {
    setData(result.data);
    if (value !== 'page') setPage(1);
    setTotalRecord(result.meta.total);
  };

  const handlePageChange=async (page) => {
    setPage(page);
    setLoading(true);
    const result = await getAllCustomers({
      page,
    });
    if (result === 401) {
    } else if (result === 500) {
      return false;
    } else {
      setCustomer(result, 'page');
    }
    setLoading(false);
  };

  const backToCustomerList = async (value, action) => {
    setLoading(true);
    if (action === 'edit') {
    }

    const result = await getAllCustomers({
      sort: value,
    });
    setCustomer(result, 'page');
    setLoading(false);
  };
  const goToPageAddCustomer = () => {
    BlockUI('#root', 'fixed');
    setTimeout(function () {
      dispatch(setIsAdd(true));
      Notiflix.Block.remove('#root');
    }, 300);
  };

  return (
    <section>
      <div className="container-fluid mt-5">
        {
          !isAddCustomer && !isEditCustomer ?(
            <>
              <h5 className="text-danger font-weight-bold mb-3">Customer List</h5>
              <div className="row">
                <div className="mb-3 d-flex justify-content-between">
                  <div className="d-flex justify-content-between ">
                    <FilterStatus  data_options={data_options_filter} setFilterStatus={setFilterStatus}  />
                  </div>
                  <div className="d-flex justify-content-between ">
                    <SearchWithDropdownOptions currentFilter={filter}  setSearch={setSearch} setFilter={setFilter} />
                    <Button
                      id="create-new-product"
                      variant="danger"
                      className="font-weight-bold ms-3"
                      onClick={goToPageAddCustomer}
                    >
                      Create new customer
                    </Button>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                {!loading ? (
                  <>
                    <CustomerTable tableHeader={data_customer_table_header} tableBody={data} />
                    {totalRecord > 8 && (
                      <PaginationUI
                        handlePageChange={handlePageChange}
                        perPage={perPage}
                        totalRecord={totalRecord}
                        currentPage={page}
                      />
                    )}
                  </>
                ) : (
                  <Skeleton column={7} />
                )}
              </div>
            </>
          ):(
            <>
              {isAddCustomer && <CustomerAdd  backToCustomerList={backToCustomerList} />}
              { isEditCustomer && <CustomerEdit backToCustomerList={backToCustomerList} />}
            </>



          )


        }

      </div>
    </section>
  );
}
