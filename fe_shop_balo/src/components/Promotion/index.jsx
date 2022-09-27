import Notiflix from 'notiflix';
import React, { useState } from 'react';
import { FaPen, FaTimesCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { getDiscountById } from '../../api/Promotion/promotionAPI';
import { setIsAdd, setIsEdit, setPromotion } from '../../redux/reducer/promotion/promotion.reducer';
import { BlockUI } from './../Layouts/Notiflix/index';
import TableLayout from './../Layouts/Table/index';
// import { getDiscountById } from './../../api/Promotion/disountAPI';


const PromotionTable = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [isCheck, setIsCheck] = useState(null);

  const handleEditPromotion = async(e, id) => {
    e.stopPropagation();
    BlockUI('#root', 'fixed');
    const result = await getDiscountById(id);
    Notiflix.Block.remove('#root');
    if (result !== 401) {
      dispatch(setIsEdit(true));
      dispatch(setPromotion(result));
      dispatch(setIsAdd(true));
    }
    return;
  }

  const renderTableBody = (body) => {
    return body.length > 0 ? (
      body.map((item, index) => (
        <tr key={index} className=" font-weight-bold ">
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.value}</td>
          <td>
            <p
              className={`text-center border-radius-2px ${
                item.deleted_at === null ? 'bg-success-100 text-success' : 'bg-red-100 text-red'
              }`}
            >
              {item.deleted_at === null ? 'Active' : 'Inactive'}
            </p>
          </td>
          <td>
            <div className="d-flex">
              <button
                id="edit-product"
                onClick={(e) => handleEditPromotion(e, item.id)}
                className="cursor-pointer br-6px p-2 bg-gray-100 text-black w-48px h-48px d-flex align-items-center justify-content-center border-none"
              >
                <FaPen className="font-20px" />
              </button>
              <button
                id="disabled-user"
                // onClick={() => handleShowModal(item.id)}
                className=" cursor-pointer br-6px p-2 ms-3 text-danger bg-gray-100 w-48px h-48px d-flex align-items-center justify-content-center border-none"
              >
                <FaTimesCircle className="text-danger font-20px" />
              </button>
            </div>
          </td>
        </tr>
      ))
    ) : (
      <>
        <tr className="text-center">
          <td colSpan={5}>Promotion is not found.</td>
        </tr>
      </>
    );
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <TableLayout tableHeader={props.tableHeader} tableBody={renderTableBody(props.tableBody)} />
        </div>
      </div>
      {/* <Modal
        show={show}
        setStateModal={handleSetState}
        elementModalTitle="Warning"
        elementModalBody={bodyPopUp()}
        className="modal-popup"
      /> */}
    </>
  );
};

export default PromotionTable;
