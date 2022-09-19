import Notiflix from 'notiflix';
import React, { useEffect, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../../api/Category/categoryAPI';
import { category_table_header } from '../../../asset/data/category_table_header';
import CategoryTable from '../../../components/Category';
import CreateCategoryForm from '../../../components/Category/Add';
import FilterStatusCategory from '../../../components/Category/FilterStatusCategory';
import Sort from '../../../components/Category/Sort';
import { BlockUI } from '../../../components/Layouts/Notiflix';
import PaginationUI from '../../../components/Layouts/Pagination';
import Skeleton from '../../../components/Layouts/Skeleton';
import { setIsAdd } from '../../../redux/reducer/category/category.reducer';
import { isAddSelector } from '../../../redux/selectors/category/category.selector';




export function CategoryPage(props) {
    const data_category_table_header = [...category_table_header];
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalRecord, setTotalRecords] = useState(0);
    const [loading, setLoading] = useState(true);
    const isAdd = useSelector(isAddSelector);
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const handleCallApiCategory = async () => {
        const result = await getAll({});


        if (result === 401) {
            console.log('error cate');
            return false;
        } else {
            setData(result.data)

            setTotalRecords(result.meta.total)

            setPage(result.meta.current_page)

        }
        setLoading(false);

    };
    useEffect(() => {
        console.log('useffect');

        handleCallApiCategory();
    }, [dispatch]);



    const goToPageAddCategory = () => {
        BlockUI('#root', 'fixed');
        setTimeout(function () {
            dispatch(setIsAdd(true));
            Notiflix.Block.remove('#root');
        }, 500);
    };

    const handleCurrentFilter = () => { };
    const handleSearh = (e) => {
        e.preventDefault()
        console.log(search);
    }
    const handleChangePage = async (page) => {
        setPage(page);
        console.log(page)
        setLoading(true);
        const result = await getAll({ page });


        if (result === 401) {
            console.log('error cate');
            return false;
        } else {
            setData(result.data)

            setTotalRecords(result.meta.total)

            setPage(result.meta.current_page)

        }
        setLoading(false);
    }

    return (
        <>
            <section>
                <div className="container-fluid mt-5">
                    {!isAdd && <h5 className="text-danger font-weight-bold mb-3">Category List</h5>}
                    {isAdd && <h5 className="text-danger font-weight-bold mb-3">Add Category</h5>}
                    {!isAdd ? (
                        <div className="row">
                            <div className="mb-3 d-flex justify-content-between">
                                <div className="d-flex justify-content-between ">
                                    <Sort currentFilter={'logger'} setCurrentFilter={handleCurrentFilter} />
                                    <FilterStatusCategory currentFilter={"logger"} setCurrentFilter={handleCurrentFilter} />
                                </div>
                                <div className="d-flex justify-content-between ">

                                    <Form>
                                        <InputGroup>
                                            <Form.Control
                                                id="seach-category"
                                                placeholder="Search name category"
                                                value={search}
                                                onChange={(e) => {
                                                    setSearch(e.target.value
                                                    )
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
                                <Skeleton column={4} />
                            )}
                        </div>
                    ) : (

                        <>{isAdd && <CreateCategoryForm backToProductList={"logger"} data={data} />}</>
                    )}
                </div>
            </section>
        </>
    );
}
