import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Skeleton from '../../../components/Layouts/Skeleton/index';
import { slider_table_header } from '../../../asset/data/slider_table_header';
import SliderTable from '../../../components/Slider';
import NotFoundData from './../../../components/Layouts/NotFoundData/index';
import PaginationUI from '../../../components/Layouts/Pagination';
import { getAllSlider } from '../../../api/Slider/sliderAPI';
import { ErrorToast } from '../../../components/Layouts/Alerts';
import { BlockUI } from '../../../components/Layouts/Notiflix';
import { setIsAdd } from '../../../redux/reducer/slider/slider.reducer';
import {
  isAddSelectorSlider,
  isEditSelectorSlider,
  isSortSelectorSlider,
  isStatusSelectorSlider,
} from '../../../redux/selectors/slider/slider.selector';
import SliderAdd from '../../../components/Slider/Add';
import SliderEdit from '../../../components/Slider/Edit';


const SliderPage = () => {
  const data_slider_table_header = [...slider_table_header];
  const isAdd = useSelector(isAddSelectorSlider);
  const isEdit = useSelector(isEditSelectorSlider);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [totalRecord, setTotalRecords] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const status = useSelector(isStatusSelectorSlider);
  const sort = useSelector(isSortSelectorSlider);

  const handleGetAllSlider = async () => {
    setIsLoading(true);

    const result = await getAllSlider({ sort, status, search, page });
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
    handleGetAllSlider();
  }, [status, sort, isEdit, isAdd]);

  const handleChangePage = async (page) => {
    setPage(page);
    setIsLoading(true);
    const result = await getAllSlider({ page });

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

const goToPageAddSlider = () => {
  BlockUI('#root', 'fixed');
  setTimeout(function () {
    dispatch(setIsAdd(true));
    Notiflix.Block.remove('#root');
  }, 500);
  };
  
  const handleSearh = async (e) => {
    e.preventDefault();
    handleGetAllSlider();
  };

  const backToSliderList = async (value) => {
    setIsLoading(true);

    const result = await getAllSlider({ sort: value });

    setData(result.data);
    setTotalRecords(result.meta.total);
    setIsLoading(false);
  };

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
                        placeholder="Search name slider"
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
                    onClick={goToPageAddSlider}
                  >
                    Create new slider
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
                  {data.length > 0 ? (
                    <SliderTable tableHeader={data_slider_table_header} tableBody={data} />
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
            <>
                {isAdd && !isEdit && <SliderAdd
                  // backToPromotionList={backToPromotionList}
                />}
                {isEdit && <SliderEdit
                  // backToPromotionList={backToPromotionList}
                />}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default SliderPage;
