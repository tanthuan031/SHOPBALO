import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { isAddSelectorSlide, isEditSelectorSlide } from './../../../redux/selectors/slide/slide.selector';
import Skeleton from './../../../components/Layouts/Skeleton/index';

const SlidePage = () => {
  const isAdd = useSelector(isAddSelectorSlide);
  const isEdit = useSelector(isEditSelectorSlide);
  const [isLoading, setIsLoading] = useState(true);


  return (
    <>
      <section>
        <div className="container-fluid mt-5">
          {!isAdd && !isEdit && <h5 className="text-danger font-weight-bold mb-3">Slide List</h5>}
          {isAdd && !isEdit && <h5 className="text-danger font-weight-bold mb-3">Add slide</h5>}
          {isEdit && <h5 className="text-danger font-weight-bold mb-3">Edit slide</h5>}

          {!isAdd && !isEdit ? (
            <div className="row">
              <div className="mb-3 d-flex justify-content-between">
                <div className="d-flex justify-content-between ">
                  {/* <SortValue />
                  <FilterStatus /> */}
                </div>
                <div className="d-flex justify-content-between ">
                  <Form>
                    <InputGroup>
                      <Form.Control
                        id="seach-category"
                        placeholder="Search name slide"
                        // value={search}
                        // onChange={(e) => {
                        //   setSearch(e.target.value);
                        // }}
                      />
                      <Button id="seach-category" variant="danger" type="submit"
                        // onClick={handleSearh}
                      >
                        <FaSearch />
                      </Button>
                    </InputGroup>
                  </Form>
                  <Button
                    id="create-new-category"
                    variant="danger"
                    className="font-weight-bold ms-3"
                    // onClick={goToPageAddPromotion}
                  >
                    Create new slide
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
                  {/* {data.length > 0 ? (
                    <PromotionTable tableHeader={data_promotion_table_header} tableBody={data} />
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
                  )} */}
                </>
              ) : (
                <Skeleton column={5} />
              )}
            </div>
          ) : (
            <>
              {/* {isAdd && !isEdit && <PromotionAdd backToPromotionList={backToPromotionList} />}
              {isEdit && <PromotionEdit backToPromotionList={backToPromotionList} />} */}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default SlidePage;
