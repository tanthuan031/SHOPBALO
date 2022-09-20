
import Notiflix from "notiflix";
import { FaPen, FaTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { showCategory } from "../../api/Category/categoryAPI";
import { setCategory, setIsAdd, setIsEdit } from "../../redux/reducer/category/category.reducer";
import { IMG_NOT_FOUND } from "../../utils/urlPath";
import { BlockUI } from "../Layouts/Notiflix";
import TableLayout from "../Layouts/Table";
import './style.css';

function CategoryTable(props) {
    const dispatch = useDispatch();

    const handleEditCategory = async (id) => {
        BlockUI('#root', 'fixed');
        const result = await showCategory(id);
        Notiflix.Block.remove('#root');
        if (result !== 401) {
            dispatch(setIsEdit(true));
            dispatch(setCategory(result));
            dispatch(setIsAdd(true));
        }
        return;
    }
    const renderBody = (body) => {

        return (body.length <= 0 ? (
            <>
                <tr className="text-center">
                    <td colSpan={5} >Chưa có danh mục nào.</td>
                </tr>
            </>) : (

            body.map((item, index) => (
                <tr
                    key={index}
                    className="cursor-pointer font-weight-bold "

                >
                    <td>{++index}</td>
                    <td>
                        <div className="category_parrent">
                            <img className="category_image" src={item.image || IMG_NOT_FOUND} alt="" />
                        </div>

                    </td>
                    <td>{item.name}</td>

                    <td>
                        <p
                            className={`text-center border-radius-2px ${item.deleted_at === null ? 'bg-success-100 text-success' : 'bg-red-100 text-red '
                                }`}
                        >
                            {item.deleted_at === null ? 'Active' : 'UnActive'}
                        </p>
                    </td>
                    <td>
                        <div className="d-flex">
                            <button
                                id="edit-product"
                                onClick={() => handleEditCategory(item.id)}
                                className="br-6px p-2 bg-gray-100 text-black w-48px h-48px d-flex align-items-center justify-content-center border-none"
                            >
                                <FaPen className="font-20px" />
                            </button>
                            <button
                                id="disabled-user"

                                className="br-6px p-2 ms-3 text-danger bg-gray-100 w-48px h-48px d-flex align-items-center justify-content-center border-none"
                            >
                                <FaTimesCircle className="text-danger font-20px" />
                            </button>
                        </div>
                    </td>
                </tr>
            ))

        )
        )
    }

    return (

        <div className="container-fluid " >
            <div className="row justify-content-center">
                <TableLayout tableHeader={props.tableHeader} tableBody={renderBody(props.tableBody)} />
            </div>
        </div>

    )



}






export default CategoryTable;