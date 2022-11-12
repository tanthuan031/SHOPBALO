import React, { useEffect, useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { getAllCategory, getAllProducts } from '../../../api/Client/Home/homeAPI';
import { title_fillter_header } from '../../../asset/data/staff/title_fillter_header';
import { ErrorToast } from '../../commons/Layouts/Alerts';
import NotFoundData from '../../commons/Layouts/NotFoundData';
import PaginationUI from '../../commons/Layouts/Pagination';
import Skeleton from '../../commons/Layouts/Skeleton';
import ProductItem from '../Home/Product/ProductItem';
import { categoryIdSelector, fillterPriceStart, fillterPriceEnd } from '../../../redux/selectors/shop/shop.selector';
import Fillter from './Fillter';
import './style.css';

const Shop = () => {
  const title_fillter = [...title_fillter_header];
  // Pagination
  const [totalRecord, setTotalRecord] = useState(0);
  const [page, setPage] = useState(1);

  const [dataCategory, setDataCategory] = useState([]);
  const [dataProduct, setDataProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const sort = 'desc';
  const per_page = 9;

  const categoryId = useSelector(categoryIdSelector);
  // console.log('🚀 ~ file: index.jsx ~ line 27 ~ Shop ~ categoryId', categoryId);
  const start_price = useSelector(fillterPriceStart);
  console.log("🚀 ~ file: index.jsx ~ line 30 ~ Shop ~ start_price", start_price)
  const end_price = useSelector(fillterPriceEnd);
  console.log("🚀 ~ file: index.jsx ~ line 32 ~ Shop ~ end_price", end_price)

  const filter = categoryId;

  const handleGetAllCategory = async () => {
    const result = await getAllCategory();
    setDataCategory(result.data);
  };

  const handleGetAllProduct = async () => {
    const result = await getAllProducts({ sort, page, filter, per_page, start_price, end_price });
    if (result === 401) {
      ErrorToast('Something went wrong. Please try again', 3000);
      return false;
    }
    setDataProduct(result.data);
    setTotalRecord(result.meta.total);
    setPage(result.meta.current_page);
    setIsLoading(false);
  };

  const handleChangePage = async (page) => {
    setPage(page);
    setIsLoading(true);
    const result = await getAllProducts({ page });

    if (result === 401) {
      ErrorToast('Something went wrong. Please try again', 3000);
      return false;
    } else {
      setDataProduct(result.data);
      setTotalRecord(result.meta.total);
      setPage(result.meta.current_page);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetAllCategory();
    handleGetAllProduct();
  }, [page,filter, start_price, end_price]);

  return (
    <>
      <section className="container">
        <section id="shop__title-main">
          <h1 className="fw-bold fs-2 my-4">ALL PRODUCT</h1>
        </section>
        <div className="d-flex">
          <div className="filter-homepage me-4 overflow-auto bg-light " style={{ width: '25%' }}>
            <div>
              <div className="overflow-auto d-flex flex-column p-3" style={{ height: '50rem' }}>
                <div className="!mt-0 flex items-center space-x-2 pb-3">
                  <FiFilter />
                  <span className="fw-bold ms-3 ">Bộ lọc</span>
                </div>
                <Fillter item={dataCategory} title={title_fillter[0].title} isContent={true} />
                <Fillter item={dataCategory} title={title_fillter[1].title} />
              </div>
            </div>
          </div>
          <div className="d-flex flex-column" style={{ width: '75%' }}>
            <div className="d-flex flex-wrap justify-content-start gap-4">
              {!isLoading ? (
                <>{dataProduct.length > 0 ? <ProductList item={dataProduct} /> : <NotFoundData />}</>
              ) : (
                <Skeleton column={7} />
              )}
            </div>
            <div className="my-5 w-100 d-flex justify-content-center">
              {totalRecord > 9 && (
                <PaginationUI
                  handlePageChange={handleChangePage}
                  perPage={per_page}
                  totalRecord={totalRecord}
                  currentPage={page}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const ProductList = (props) => {
  const { item } = props;
  return <>{item.length > 0 && item.map((item, index) => <ProductItem item={item} key={index} />)}</>;
};

export default Shop;
