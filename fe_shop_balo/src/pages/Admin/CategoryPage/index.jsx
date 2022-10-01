import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../../api/Category/categoryAPI';
import { category_table_header } from '../../../asset/data/category_table_header';
import CategoryTable from '../../../components/Category';
import CreateCategoryForm from '../../../components/Category/Add';
import EditCategory from '../../../components/Category/Edit';
import Sort from '../../../components/Category/Sort';
import { ErrorToast } from '../../../components/Layouts/Alerts';
import { BlockUI } from '../../../components/Layouts/Notiflix';
import PaginationUI from '../../../components/Layouts/Pagination';
import Skeleton from '../../../components/Layouts/Skeleton';
import { setIsAdd } from '../../../redux/reducer/category/category.reducer';
import {
  isAddCategorySelector,
  isEditCategorySelector,
  isResetCategorySelector,
  isSortCategorySelector,
  isStatusCategorySelector,
} from '../../../redux/selectors/category/category.selector';

export function CategoryPage(props) {
  const data_category_table_header = [...category_table_header];
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalRecord, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(true);
  const isAdd = useSelector(isAddCategorySelector);
  const isEdit = useSelector(isEditCategorySelector);
  const isReset = useSelector(isResetCategorySelector);
  const status = useSelector(isStatusCategorySelector);
  const sort_id = useSelector(isSortCategorySelector);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handleCallApiCategory = async () => {
    setLoading(true);

    const result = await getAll({ search, status, sort_id });

    if (result === 401) {
      ErrorToast('Something went wrong. Please try again', 3000);
      return false;
    } else {
      setData(result.data);

      setTotalRecords(result.meta.total);

      setPage(result.meta.current_page);
    }
    setLoading(false);
  };
  useEffect(() => {
    handleCallApiCategory();
  }, [dispatch, isAdd, isReset, status, sort_id]);

  const goToPageAddCategory = () => {
    BlockUI('#root', 'fixed');
    setTimeout(function () {
      dispatch(setIsAdd(true));
      Notiflix.Block.remove('#root');
    }, 500);
  };

  const handleCurrentFilter = () => {};

  const handleSearh = async (e) => {
    e.preventDefault();

    handleCallApiCategory();
  };
  const handleChangePage = async (page) => {
    setPage(page);
    setLoading(true);
    const result = await getAll({ page });

    if (result === 401) {
      ErrorToast('Something went wrong. Please try again', 3000);
      return false;
    } else {
      setData(result.data);
      console.log("🚀 ~ file: index.jsx ~ line 85 ~ handleChangePage ~ data", data)

      setTotalRecords(result.meta.total);

      setPage(result.meta.current_page);
    }
    setLoading(false);
  };

  return (
    <>
      <section>
        <div className="container-fluid mt-5">
          {!isAdd && <h5 className="text-danger font-weight-bold mb-3">Category List</h5>}
          {isAdd && !isEdit && <h5 className="text-danger font-weight-bold mb-3">Add Category</h5>}
          {isEdit && <h5 className="text-danger font-weight-bold mb-3">Update Category</h5>}
          {!isAdd ? (
            <div className="row">
              <div className="mb-3 d-flex justify-content-between">
                <div className="d-flex justify-content-between ">
                  <Sort currentFilter={'logger'} setCurrentFilter={handleCurrentFilter} />
                  {/* <FilterStatusCategory currentFilter={"logger"} setCurrentFilter={handleCurrentFilter} /> */}
                </div>
                <div className="d-flex justify-content-between ">
                  <Form>
                    <InputGroup>
                      <Form.Control
                        id="seach-category"
                        placeholder="Search name category"
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                        }}
                      />
                      <Button id="seach-category" variant="danger" type="submit" onClick={handleSearh}>
                        <FaSearch />
                      </Button>
                    </InputGroup>
                  </Form>
                  <Button
                    id="create-new-category"
                    variant="danger"
                    className="font-weight-bold ms-3"
                    onClick={goToPageAddCategory}
                  >
                    Create new category
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            ''
          )}
          {!isAdd ? (
            <div className="row justify-content-center">
              {!loading ? (
                <>
                  <CategoryTable tableHeader={data_category_table_header} tableBody={data} />
                  {totalRecord > 10 && (
                    <PaginationUI
                      handlePageChange={handleChangePage}
                      perPage={10}
                      totalRecord={totalRecord}
                      currentPage={page}
                    />
                  )}
                </>
              ) : (
                <Skeleton column={3} />
              )}
            </div>
          ) : (
            <>
              {isAdd && !isEdit && <CreateCategoryForm data={data} />}
              {isEdit && <EditCategory data={data} />}
            </>
          )}
        </div>
      </section>
    </>
  );
}
