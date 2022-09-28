import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { data_staff } from '../../../asset/data/staff/data_staff';
import { staff_table_header } from '../../../asset/data/staff/staff_table_header';
import PaginationUI from '../../../components/Layouts/Pagination';
import { StaffTable } from '../../../components/Staff';
import Skeleton from '../../../components/Layouts/Skeleton';
import { getAllStaffs } from '../../../api/Staff/staffAPI';
import FilterStatus from '../../../components/Staff/FilterStatus';
import { Button, Dropdown, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { BlockUI } from '../../../components/Layouts/Notiflix';
import { setIsAdd } from '../../../redux/reducer/staff/staff.reducer';
import Notiflix from 'notiflix';
import Filter from '../../../components/Layouts/SearchWithDropdownOptions/SearchWithDropdownOptions';
import { isAddStaffSelector, isEditStaffSelector } from '../../../redux/selectors';
import StaffAdd from '../../../components/Staff/Add';
import { getAllProducts } from '../../../api/Product/productAPI';
import StaffEdit from '../../../components/Staff/Edit';
import SearchWithDropdownOptions from '../../../components/Layouts/SearchWithDropdownOptions/SearchWithDropdownOptions';


export function StaffPage(props) {
  const data_staff_table_header = [...staff_table_header];
  const data_staff_table = [...data_staff];
  const [data,setData]=React.useState([])
  // Pagination
  const [perPage,setPerPage] = React.useState(8)
  const [totalPage,setTotalPage] = React.useState(0)
  const [totalRecord,setTotalRecord] = React.useState(0)
  const [page,setPage] = React.useState(1)

  //Filter & Search
  const [filter,setFilter] = React.useState('fullname')
  const [sort,setSort] = React.useState([])
  const [search,setSearch]=React.useState([])
  const [searchValue,setSearchValue]=React.useState('')
  const [filterStatus,setFilterStatus]=React.useState('All')
  const data_options_filter=[
    { id: 1, name: 'All',value: 'All' },
    { id: 2, name: 'Active',value: 1 },
    { id: 3, name: 'Disable',value: 0 },
  ]
  //Redux
  const isAddStaff=useSelector(isAddStaffSelector)
  const isEditStaff=useSelector(isEditStaffSelector)
  const dispatch = useDispatch();
  //Loading
  const [loading, setLoading] = React.useState(true);
  //Logic
  const dispatchAction={
    dispatch,
    search,filterStatus
  }
  React.useEffect(() => {
    // handle FilterStatus Value
   let params={}
    if (filterStatus!=='All') params={...params,filterStatus}
   // console.log(filter)
    if(search !='') params={...params,filter,search}
    const handleGetAllStaffs = async () => {
      const result = await getAllStaffs(params);
      if (result === 401) {
        return false;
      } else if (result === 500) {
        return false;
      } else {
        setStaff(result, 'reset-page');
      }
      setLoading(false);
    };
    handleGetAllStaffs();
  }, [dispatch,
    search,filterStatus]);

  const setStaff = (result, value) => {
    setData(result.data);
    if (value !== 'page') {
      setPage(1);
    }
    setTotalRecord(result.meta.total);
   // setTotalPage(result.meta.);
  };

  const handlePageChange=async (page) => {
    setPage(page);
    setLoading(true);
    const result = await getAllStaffs({
      page,
    });
    if (result === 401) {
    } else if (result === 500) {
      return false;
    } else {
      setStaff(result, 'page');
    }
    setLoading(false);
  };

  const backToStaffList = async (value, action) => {
    setLoading(true);
    console.log(value);
    if (action === 'edit') {
      console.log('Back to Edit');
    }

    const result = await getAllStaffs({
      sort: value,
    });
    console.log('Result: ',result);
    setStaff(result, 'page');
    setLoading(false);
  };
  const goToPageAddStaff = () => {
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
          !isAddStaff && !isEditStaff ?(
            <>
              <h5 className="text-danger font-weight-bold mb-3">Staff List</h5>
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
                      onClick={goToPageAddStaff}
                    >
                      Create new staff
                    </Button>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                {!loading ? (
                  <>
                    <StaffTable tableHeader={data_staff_table_header} tableBody={data} />
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
              {isAddStaff && <StaffAdd  backToStaffList={backToStaffList} />}
              { isEditStaff && <StaffEdit backToStaffList={backToStaffList} />}
            </>



          )


        }

      </div>
    </section>
  );
}