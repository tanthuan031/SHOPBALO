import React from 'react';
import { useSelector } from 'react-redux';
import {
  isEditSelectorReview,
  isSortSelectorReview,
  isStatusSelectorReview,
} from './../../../redux/selectors/review/review.selector';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { review_table_header } from '../../../asset/data/review_table_header';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import Skeleton from './../../../components/Layouts/Skeleton/index';
import ReviewTable from '../../../components/Review';
import { getAllReviews } from '../../../api/Review/reviewAPI';
import { ErrorToast } from '../../../components/Layouts/Alerts';
import PaginationUI from './../../../components/Layouts/Pagination/index';
import ReviewDetail from './../../../components/Review/Detail/index';
import SortPoint from './../../../components/Review/SortPoint/index';
import FilterStatus from './../../../components/Review/FilterStatus/index';
import NotFoundData from '../../../components/Layouts/NotFoundData';

const ReviewPage = () => {
  const data_review_table_header = [...review_table_header];
  const dispatch = useDispatch();
  const isEdit = useSelector(isEditSelectorReview);
  const status = useSelector(isStatusSelectorReview);
  const sort = useSelector(isSortSelectorReview);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [totalRecord, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);

  const handleGetAllReview = async () => {
    setIsLoading(true);

    const result = await getAllReviews({ sortPoint: sort, sortStatus: status, search, page });
    if (result.status === 401) {
      ErrorToast('Something went wrong. Please try again', 3000);
      return false;
    } else {
      setData(result.data);
      setTotalRecords(result.meta.total);
      setPage(result.meta.current_page);
    }
    setIsLoading(false);
    console.log(status);
  };

  useEffect(() => {
    handleGetAllReview();
  }, [isEdit, sort, status]);

  const handleChangePage = async (page) => {
    setPage(page);
    setIsLoading(true);
    const result = await getAllReviews({ page });

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

  const handleSearh = async (e) => {
    e.preventDefault();
    handleGetAllReview({ search });
  };

  return (
    <>
      <section>
        <div className="container-fluid mt-5">
          {!isEdit && <h5 className="text-danger font-weight-bold mb-3">Review List</h5>}
          {isEdit && <h5 className="text-danger font-weight-bold mb-3">Detail review</h5>}

          {!isEdit ? (
            <div className="row">
              <div className="mb-3 d-flex justify-content-between">
                <div className="d-flex justify-content-between ">
                  <SortPoint />
                  <FilterStatus />
                </div>
                <div className="d-flex justify-content-between ">
                  <Form>
                    <InputGroup>
                      <Form.Control
                        id="seach-category"
                        placeholder="Search name ..."
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
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}

          {!isEdit ? (
            <div className="row justify-content-center">
              {!isLoading ? (
                <>
                  {data.length > 0 ? (
                    <ReviewTable tableHeader={data_review_table_header} tableBody={data} />
                  ) : (
                    <NotFoundData />
                  )}
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
            <>{isEdit && <ReviewDetail />}</>
          )}
        </div>
      </section>
    </>
  );
};

export default ReviewPage;
