import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { data_staff } from '../../../asset/data/staff/data_staff';
import { staff_table_header } from '../../../asset/data/staff/staff_table_header';
import PaginationUI from '../../../components/Layouts/Pagination';
import { StaffTable } from '../../../components/Staff';
import Skeleton from '../../../components/Layouts/Skeleton';
import { getAllStaffs } from '../../../api/Staff/staffAPI';
import { getAllProducts } from '../../../api/Product/productAPI';
import FilterCategory from '../../../components/Product/FilterCategory';
import FilterStatus from '../../../components/Product/FilterStatus';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { BlockUI } from '../../../components/Layouts/Notiflix';
import { setIsAdd } from '../../../redux/reducer/product/product.reducer';
import Notiflix from 'notiflix';
export function StaffPage(props) {
  const data_staff_table_header = [...staff_table_header];
  const data_staff_table = [...data_staff];
  const [data,setData]=React.useState([])

  // Pagination
  const [perPage,setPerPage] = React.useState(10)
  const [totalPage,setTotalPage] = React.useState(0)
  const [totalRecord,setTotalRecord] = React.useState(0)
  const [page,setPage] = React.useState(1)

  //Filter & Search
  const [filter,setFilter] = React.useState([])
  //Redux


  //Loading
  const [loading, setLoading] = React.useState(true);
  //Logic
  const dispatch = useDispatch();
  React.useEffect(() => {
    const handleGetAllStaffs = async () => {
      const result = await getAllStaffs({});
      if (result === 401) {
        return false;
      } else if (result == 500) {
        return false;
      } else {
        setStaff(result, 'reset-page');
      }
      setLoading(false);
    };
    handleGetAllStaffs();
  }, [dispatch]);

  const setStaff = (result, value) => {
    setData(result.data);
    if (value !== 'page') {
      setPage(1);
    }

    setTotalRecord(result.meta.total);
    setTotalPage(result.meta.last_page);
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

  const handleCurrentFilter= (filter) => {

  }
  const goToPageAddStaff = () => {
    BlockUI('#root', 'fixed');
    setTimeout(function () {
      dispatch(setIsAdd(true));
      Notiflix.Block.remove('#root');
    }, 500);
  };

  return (
    <section>
      <div className="container-fluid mt-5">

        <h5 className="text-danger font-weight-bold mb-3">Staff List</h5>
        <div className="row">
          <div className="mb-3 d-flex justify-content-between">
            <div className="d-flex justify-content-between ">

            </div>
            <div className="d-flex justify-content-between ">
              {/* onSubmit={e => handleSearch(e)} */}
              <Form>
                <InputGroup>
                  <Form.Control
                    id="search-user"
                    placeholder="Category or name"
                    // onChange={e => setSearch(e.target.value)}
                  />
                  <Button id="search-user" variant="danger" type="submit">
                    <FaSearch />
                  </Button>
                </InputGroup>
              </Form>
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
              {totalRecord > 5 && (
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
      </div>
    </section>
  );
}
