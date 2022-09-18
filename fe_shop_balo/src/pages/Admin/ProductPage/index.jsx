import Notiflix from 'notiflix';
import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../api/Product/productAPI';
import { data_product } from '../../../asset/data/data_product';
import { product_table_header } from '../../../asset/data/product_table_header';
import { BlockUI } from '../../../components/Layouts/Notiflix';
import PaginationUI from '../../../components/Layouts/Pagination';
import Skeleton from '../../../components/Layouts/Skeleton';
import { ProductTable } from '../../../components/Product';
import ProductAdd from '../../../components/Product/Add';
import FilterCategory from '../../../components/Product/FilterCategory';
import FilterStatus from '../../../components/Product/FilterStatus';
import { setIsAdd } from '../../../redux/reducer/product/product.reducer';
import { isAddSelector } from '../../../redux/selectors';

export function ProductPage(props) {
  const data_product_table_header = [...product_table_header];
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [filter, setFilter] = React.useState([]);
  const [totalRecord, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(0);
  const [perPage] = React.useState(10);
  const isAdd = useSelector(isAddSelector);
  const [sort, setCurrentSort] = React.useState([
    {
      key: 'updated_at',
      value: 'desc',
    },
  ]);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const handleGetAllProducts = async () => {
      const result = await getAllProducts({});
      if (result === 401) {
        return false;
      } else if (result == 500) {
        return false;
      } else {
        setProduct(result, 'reset-page');
      }
      setLoading(false);
    };
    handleGetAllProducts();
  }, [dispatch]);

  const handlePageChange = async (page) => {
    setPage(page);
    setLoading(true);
    const result = await getAllProducts({
      page,
    });
    if (result === 401) {
    } else if (result === 500) {
      return false;
    } else {
      setProduct(result, 'page');
    }
    setLoading(false);
  };

  const goToPageAddProduct = () => {
    BlockUI('#root', 'fixed');
    setTimeout(function () {
      dispatch(setIsAdd(true));
      Notiflix.Block.remove('#root');
    }, 500);
  };
  const backToProductList = async (value) => {
    setLoading(true);
    const result = await getAllProducts({
      sort: value,
    });
    setProduct(result, 'page');
    setLoading(false);
  };
  const handleCurrentFilter = () => {};
  const setProduct = (result, value) => {
    setData(result.data);
    if (value !== 'page') {
      setPage(1);
    }

    setTotalRecords(result.meta.total);
    setTotalPage(result.meta.last_page);
  };
  return (
    <>
      <section>
        <div className="container-fluid mt-5">
          {!isAdd && <h5 className="text-danger font-weight-bold mb-3">Product List</h5>}
          {isAdd && <h5 className="text-danger font-weight-bold mb-3">Add product</h5>}
          {!isAdd ? (
            <div className="row">
              <div className="mb-3 d-flex justify-content-between">
                <div className="d-flex justify-content-between ">
                  <FilterCategory currentFilter={filter} setCurrentFilter={handleCurrentFilter} />
                  <FilterStatus currentFilter={filter} setCurrentFilter={handleCurrentFilter} />
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
                    onClick={goToPageAddProduct}
                  >
                    Create new product
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
                  <ProductTable tableHeader={data_product_table_header} tableBody={data} />
                  {totalRecord > 10 && (
                    <PaginationUI
                      handlePageChange={handlePageChange}
                      perPage={perPage}
                      totalRecord={totalRecord}
                      currentPage={page}
                    />
                  )}
                </>
              ) : (
                <Skeleton column={6} />
              )}
            </div>
          ) : (
            <>{isAdd && <ProductAdd backToProductList={backToProductList} />}</>
          )}
        </div>
      </section>
    </>
  );
}
