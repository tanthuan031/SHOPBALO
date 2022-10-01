import Notiflix from 'notiflix';
import React, { useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { BlockUI } from './../Layouts/Notiflix/index';
import TableLayout from './../Layouts/Table/index';
import Modal from '../Layouts/Modal';
import { ErrorToast, SuccessToast } from './../Layouts/Alerts/index';
import { getReviewById } from '../../api/Review/reviewAPI';
import { setReview, setIsAdd, setIsEdit, setIsReset } from '../../redux/reducer/review/review.reducer';

const ReviewTable = (props) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [isCheck, setIsCheck] = useState(null);

  const handleDetailReview = async (e, id) => {
    e.stopPropagation();
    BlockUI('#root', 'fixed');
    const result = await getReviewById(id);
    Notiflix.Block.remove('#root');
    if (result !== 401) {
      dispatch(setIsEdit(true));
      dispatch(setReview(result));
    }
    return;
  };


  // const handleSetState = () => {
  //   setShow(false);
  //   setIsCheck(null);
  // };

  const renderTableBody = (body) => {
    return (body.length > 0 ? (
      body.map((item, index) => (
        <tr key={index} className=" font-weight-bold ">
          <td>{++index}</td>
          <td>{item.products.name}</td>
          <td>{`${item.customers.last_name} ${item.customers.first_name}`}</td>
          <td>{item.point}</td>
          <td>{item.content}</td>
          <td>{item.image}</td>

          <td>
            <div className="d-flex">
              <button
                id="edit-product"
                onClick={(e) => handleDetailReview(e, item.id)}
                className="cursor-pointer br-6px p-2 bg-gray-100 text-black w-48px h-48px d-flex align-items-center justify-content-center border-none"
              >
                <CgDetailsMore className="font-20px" />
              </button>
            </div>
          </td>
        </tr>
      ))
    ) : (
      <>
        <tr className="text-center">
          <td colSpan={6}>Review is not found.</td>
        </tr>
      </>
    ))
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <TableLayout tableHeader={props.tableHeader} tableBody={renderTableBody(props.tableBody)} />
        </div>
      </div>
    </>
  );
};

export default ReviewTable;
