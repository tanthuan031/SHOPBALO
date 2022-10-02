import Notiflix from 'notiflix';
import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../../api/Category/categoryAPI';
import { getAllProducts } from '../../../api/Product/productAPI';
import { product_table_header } from '../../../asset/data/product_table_header';
import { ErrorToast } from '../../../components/Layouts/Alerts';
import { BlockUI } from '../../../components/Layouts/Notiflix';
import PaginationUI from '../../../components/Layouts/Pagination';
import Skeleton from '../../../components/Layouts/Skeleton';
import { ProductTable } from '../../../components/Product';
import ProductAdd from '../../../components/Product/Add';
import ProductEdit from '../../../components/Product/Edit';
import FilterCategory from '../../../components/Product/FilterCategory';
import FilterStatus from '../../../components/Product/FilterStatus';
import { setIsAdd } from '../../../redux/reducer/product/product.reducer';
import { isAddSelector, isEditSelector } from '../../../redux/selectors';

export function ProductPage(props) {
  const data_product_table_header = [...product_table_header];
  const [data, setData] = useState([]);
  const [listCategory, setDataCategory] = useState();
  const [page, setPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');
  const [totalRecord, setTotalRecords] = useState(0);
  const [loading, setLoading] = useState(true);
  // const [totalPage, setTotalPage] = useState(0);
  const [perPage] = useState(10);
  const isAdd = useSelector(isAddSelector);
  const isEdit = useSelector(isEditSelector);
  console.log(isEdit)
  const [sort, setCurrentSort] = useState([
    {
      key: 'id',
      value: 'asc',
    },
  ]);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  React.useEffect(() => {
    const handleGetAllProducts = async () => {
      const result = await getAllProducts({});
      if (result === 401) {
        return false;
      } else if (result === 500) {
        return false;
      } else {
        setProduct(result, 'reset-page');
      }
      setLoading(false);
    };
    const handleGetListCategory = async () => {
      const result = await getAll();
      if (result === 401) {
        console.log('error cate');
        return false;
      } else {
        setDataCategory(result.data);
      }
    };
    handleGetAllProducts();
    handleGetListCategory();
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
    setFilterStatus('All');
  };

  const goToPageAddProduct = () => {
    BlockUI('#root', 'fixed');
    setTimeout(function () {
      dispatch(setIsAdd(true));
      Notiflix.Block.remove('#root');
    }, 500);
  };
  const backToProductList = async (value, action) => {
    setLoading(true);
    if (action === 'edit') {
      console.log('Back to Edit');
    }

    const result = await getAllProducts({
      sort: value,
    });
    setProduct(result, 'page');
    setLoading(false);
  };
  
  const handleCurrentFilterStatus = async (value) => {
    let tempStatus;
    setLoading(true);

    if ((value === filterStatus && value === 'Active') || (value === filterStatus && value === 'Out_of_stock')) {
      setFilterStatus('All');
    } else if (value === filterStatus && value === 'All') {
      setFilterStatus('All');
      return;
    } else {
      setFilterStatus(value);
      if (value === 'Active') tempStatus = '0';
      if (value === 'Out_of_stock') tempStatus = '1';
    }
    // setCurrentSort({
    //   key: 'id',
    //   value: 'asc',
    // });
    const result = await getAllProducts({
      sort: {
        key: 'id',
        value: 'asc',
      },
      search: search,
      filterStatus: tempStatus,
      filterCategory: filterCategory === 'All' ? undefined : filterCategory,
      page: page,
    });
    if (result === 401) {
    } else if (result === 500) {
      ErrorToast('Something went wrong. Please try again', 3000);
    } else {
      setProduct(result, 'page');
    }
    Notiflix.Block.remove('#root');
    setLoading(false);
  };
  const handleCurrentFilterCategory = async (value) => {
    setLoading(true);

    let tempFilterCategory;
    if (value === 'All') {
      setFilterCategory('All');
      tempFilterCategory = undefined;
    } else {
      setFilterCategory(value);
      tempFilterCategory = value;
    }
    const result = await getAllProducts({
      sort: {
        key: 'id',
        value: 'asc',
      },
      search: search,
      filterCategory: tempFilterCategory,
      filterStatus: filterStatus === 'All' ? undefined : filterStatus === 'Active' ? '0' : '1',
      page: page,
    });

    if (result === 401) {
    } else if (result === 500) {
      ErrorToast('Something went wrong. Please try again', 3000);
    } else {
      setProduct(result, 'page');
    }
    Notiflix.Block.remove('#root');
    setLoading(false);
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    let tempSort;
    if (sort.length > 0) tempSort = sort;
    if (search !== '') {
      const result = await getAllProducts({
        sort: tempSort,
        page: page,
        search,
      });
      if (result === 500 || result === 401) {
        ErrorToast('Something went wrong. Please try again', 3000);
      } else {
        setProduct(result, 'page');
      }
      return;
    }
    const result = await getAllProducts({
      sort: tempSort,
      page: page,
    });
    if (result === 500 || result === 401) {
      ErrorToast('Something went wrong. Please try again', 3000);
    } else {
      setProduct(result, 'page');
    }
  };
  const setProduct = (result, value) => {
    setData(result.data);
    if (value !== 'page') {
      setPage(1);
    }
    setTotalRecords(result.meta.total);
    // setTotalPage(result.meta.last_page);
  };
  return (
    <>
      <section>
        <div className="container-fluid mt-5">
          {!isAdd && !isEdit && <h5 className="text-danger font-weight-bold mb-3">Product List</h5>}
          {isAdd && <h5 className="text-danger font-weight-bold mb-3">Add product</h5>}
          {isEdit && <h5 className="text-danger font-weight-bold mb-3">Edit product</h5>}
          {!isAdd && !isEdit ? (
            <div className="row">
              <div className="mb-3 d-flex justify-content-between">
                <div className="d-flex justify-content-between ">
                  <FilterCategory
                    currentFilter={filterCategory}
                    setCurrentFilter={handleCurrentFilterCategory}
                    data={listCategory}
                  />
                  <FilterStatus currentFilter={filterStatus} setCurrentFilter={handleCurrentFilterStatus} />
                </div>
                <div className="d-flex justify-content-between ">
                  {/* onSubmit={e => handleSearch(e)} */}
                  <Form onSubmit={(e) => handleSearch(e)}>
                    <InputGroup>
                      <Form.Control
                        id="search-product"
                        placeholder="Name"
                        onChange={(e) => setSearch(e.target.value)}
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
          {!isAdd && !isEdit ? (
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
            <>
              {isAdd && <ProductAdd backToProductList={backToProductList} />}
              {isEdit && <ProductEdit backToProductList={backToProductList} />}
            </>
          )}
        </div>
      </section>
    </>
  );
}
