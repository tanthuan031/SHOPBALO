import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { promotion_table_header } from '../../../asset/data/promotion_table_header';
import FilterStatus from './../../../components/Promotion/FilterStatus/index';
import {
  isAddSelector,
  isEditSelector,
  isSortSelector,
  isStatusSelector,
} from './../../../redux/selectors/promotion/promotion.selector';
import PromotionTable from './../../../components/Promotion/index';
import { getAllDisount } from '../../../api/Promotion/promotionAPI';
import { ErrorToast } from '../../../components/Layouts/Alerts';
import Skeleton from './../../../components/Layouts/Skeleton/index';
import PaginationUI from '../../../components/Layouts/Pagination';
import PromotionEdit from '../../../components/Promotion/Edit';
import { BlockUI } from '../../../components/Layouts/Notiflix';
import Notiflix from 'notiflix';
import { setIsAdd } from '../../../redux/reducer/promotion/promotion.reducer';
import PromotionAdd from './../../../components/Promotion/Add/index';
import CreateCategoryForm from './../../../components/Category/Add/index';
import SortValue from '../../../components/Promotion/SortValue';

const PromotionPage = () => {
  const data_promotion_table_header = [...promotion_table_header];
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalRecord, setTotalRecords] = useState(0);
  const isAdd = useSelector(isAddSelector);
  const isEdit = useSelector(isEditSelector);
  const [search, setSearch] = useState('');
  const status = useSelector(isStatusSelector);
  const sort = useSelector(isSortSelector);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const handleGetAllPromotion = async () => {
    setIsLoading(true);
    const result = await getAllDisount({ sort, status, search });
    if (result === 401) {
      ErrorToast('Something went wrong. Please try again', 3000);
      return false;
    } else {
      setData(result.data);
      setTotalRecords(result.meta.total);
      setPage(result.meta.current_page);
    }
    setIsLoading(false);
  };

  useEffect(() => {    
    handleGetAllPromotion();
  }, []);

  const handleCurrentFilter = () => {};

  const handleChangePage = async (page) => {
    setPage(page);
    setIsLoading(true);
    const result = await getAllDisount({ page });

    if (result === 401) {
      ErrorToast('Something went wrong. Please try again', 3000);
      return false;
    } else {
      setData(result.data);
      setTotalRecords(result.meta.total);
      setPage(result.meta.current_page);
    }
    setIsLoading(false);
  };

  const goToPageAddPromotion = () => {
    BlockUI('#root', 'fixed');
    setTimeout(function () {
      dispatch(setIsAdd(true));
      Notiflix.Block.remove('#root');
    }, 500);
  };
  
  const handleSearh = async (e) => {
    e.preventDefault();
    handleGetAllPromotion();
  };

  return (
    <>
      <section>
        <div className="container-fluid mt-5">
          {!isAdd && !isEdit && <h5 className="text-danger font-weight-bold mb-3">Promotion List</h5>}
          {isAdd && !isEdit && <h5 className="text-danger font-weight-bold mb-3">Add promotion</h5>}
          {isEdit && <h5 className="text-danger font-weight-bold mb-3">Edit promotion</h5>}

          {!isAdd && !isEdit ? (
            <div className="row">
              <div className="mb-3 d-flex justify-content-between">
                <div className="d-flex justify-content-between ">
                  <SortValue currentFilter={'logger'} setCurrentFilter={handleCurrentFilter} />
                  <FilterStatus />
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
                      <Button
                        id="seach-category"
                        variant="danger"
                        type="submit"
                        onClick={handleSearh}
                      >
                        <FaSearch />
                      </Button>
                    </InputGroup>
                  </Form>
                  <Button
                    id="create-new-category"
                    variant="danger"
                    className="font-weight-bold ms-3"
                    onClick={goToPageAddPromotion}
                  >
                    Create new promotion
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}

          {!isAdd ? (
            <div className="row justify-content-center">
              {!isLoading ? (
                <>
                  <PromotionTable tableHeader={data_promotion_table_header} tableBody={data} />
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
                <Skeleton column={5} />
              )}
            </div>
          ) : (
            <>
              {isAdd && !isEdit && <PromotionAdd data={data} />}
              {isEdit && <PromotionEdit data={data} />}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default PromotionPage;
