import React, { useEffect, useState } from 'react';
import { FiFilter } from 'react-icons/fi';
import { GrSubtract } from 'react-icons/gr';
import { getAllCategory, getAllProducts } from '../../../api/Client/Home/homeAPI';
import { title_fillter_header } from '../../../asset/data/staff/title_fillter_header';
import { ErrorToast } from '../../commons/Layouts/Alerts';
import NotFoundData from '../../commons/Layouts/NotFoundData';
import PaginationUI from '../../commons/Layouts/Pagination';
import Skeleton from '../../commons/Layouts/Skeleton';
import ProductItem from '../Home/Product/ProductItem';
import Fillter from './Fillter';
import './style.css';

const dataPO = [
  {
    id: 1,
    image:
      'https://thumbs.dreamstime.com/b/fashion-pretty-cool-young-girl-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpgg',
    name: 'Women',
    description: 'Spring 2018',
    price: 12,
  },
  {
    id: 2,
    image: 'https://wallpapershome.com/images/pages/ico_h/24116.jpg',
    name: 'Women',
    description: 'Spring 2018',
    price: 12,
  },
  {
    id: 3,
    image:
      'https://thumbs.dreamstime.com/b/fashion-pretty-cool-young-girl-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg',
    name: 'Women',
    description: 'Spring 2018',
    price: 12,
  },
  {
    id: 4,
    image: 'https://wallpapershome.com/images/pages/ico_h/24116.jpg',
    name: 'Women',
    description: 'Spring 2018',
    price: 12,
  },
  {
    id: 5,
    image:
      'https://thumbs.dreamstime.com/b/fashion-pretty-cool-young-girl-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpgg',
    name: 'Women',
    description: 'Spring 2018',
    price: 12,
  },
  {
    id: 6,
    image: 'https://wallpapershome.com/images/pages/ico_h/24116.jpg',
    name: 'Women',
    description: 'Spring 2018',
    price: 12,
  },
  {
    id: 7,
    image:
      'https://thumbs.dreamstime.com/b/fashion-pretty-cool-young-girl-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg',
    name: 'Women',
    description: 'Spring 2018',
    price: 12,
  },
];

const Shop = () => {
  const title_fillter = [...title_fillter_header];

  // Pagination
  const [perPage, setPerPage] = useState(8);
  const [totalRecord, setTotalRecord] = useState(0);
  const [page, setPage] = useState(1);

  const [dataCategory, setDataCategory] = useState([]);

  const [dataProduct, setDataProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleGetAllCategory = async () => {
    const result = await getAllCategory();
    setDataCategory(result.data);
  };

  const handleGetAllProduct = async () => {
    const result = await getAllProducts();
    if (result === 401) {
      ErrorToast('Something went wrong. Please try again', 3000);
    }
    setDataProduct(result.data);
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
  }, []);

  return (
    <>
      <section className="container bg0 p-t-23 p-b-140">
        <section id="shop__title-main">
          <h1 className="fw-bold fs-2 my-4">ALL PRODUCT</h1>
        </section>
        <div className=" d-flex ">
          <div className="filter-homepage me-4  overflow-auto bg-light sticky ">
            <div className="overflow-auto d-flex flex-column p-3" style={{ height: '50rem' }}>
              <div className="!mt-0 flex items-center space-x-2 pb-3">
                <FiFilter />
                <span className="fw-bold ms-3 ">Bộ lọc</span>
              </div>
              {/* filter */}
              <Fillter item={dataCategory} title={title_fillter[0].title} />
              <Fillter item={dataCategory} title={title_fillter[1].title} />
              <Fillter item={dataCategory} title={title_fillter[2].title} />
            </div>
          </div>

          <div className="row">
            {!isLoading ? (
              <>
                {dataProduct.length > 0 ? <ProductList item={dataProduct} /> : <NotFoundData />}
                {totalRecord > 8 && (
                  <PaginationUI
                    handlePageChange={handleChangePage}
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
    </>
  );
};

const ProductList = (props) => {
  const { item } = props;
  return <>{item.length > 0 && item.map((item) => <ProductItem item={item} />)}</>;
};

export default Shop;
