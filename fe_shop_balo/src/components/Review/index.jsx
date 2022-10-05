import Notiflix from 'notiflix';
import React, { useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { FaStar, FaTimesCircle } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { deleteReview, getReviewById } from '../../api/Review/reviewAPI';
import { setIsEdit, setIsReset, setReview } from '../../redux/reducer/review/review.reducer';
import { BlockUI } from './../Layouts/Notiflix/index';
import TableLayout from './../Layouts/Table/index';
import './style.css';
import { isSelectorReview } from './../../redux/selectors/review/review.selector';
import { URL_SERVER } from './../../utils/urlPath';
import Modal from './../Layouts/Modal/index';
import { ErrorToast, SuccessToast } from './../Layouts/Alerts/index';
import { editReview } from './../../api/Review/reviewAPI';
import { formatter } from '../../utils/formatCurrency';

const ReviewTable = (props) => {
  const dispatch = useDispatch();
  const [showPublished, setShowPublished] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
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

  const handleShowModalPublished = (id) => {
    setShowPublished(true);
    setIsCheck(id);
  };

  const handleShowModalDelete = (id) => {
    setShowDelete(true);
    setIsCheck(id);
  };

  const handleSetStatePublished = () => {
    setShowPublished(false);
    setIsCheck(null);
  };

  const handleSetStateDelete = () => {
    setShowDelete(false);
    setIsCheck(null);
  };

  // const handlePublish = async () => {
  //   BlockUI('#root', 'fixed');

  //   if (isCheck !== null) {
  //     const result = await editReview(isCheck, {});
  //     Notiflix.Block.remove('#root');
  //     if (result === 200) {
  //       SuccessToast('Published review successfully.', 3000);
  //     } else {
  //       ErrorToast('Published review failed.', 3000);
  //     }
  //     handleSetStatePublished();
  //     dispatch(setIsReset(''));
  //   }
  // };

  const handleDelete = async () => {
    BlockUI('#root', 'fixed');
    if (isCheck !== null) {
      const result = await deleteReview(isCheck);
      Notiflix.Block.remove('#root');
      if (result === 200) {
        SuccessToast('Delete review successfully.', 3000);
      } else {
        ErrorToast('Delete review failed.', 3000);
      }
      handleSetStateDelete();
      dispatch(setIsReset(''));
    }
  };

  const renderTableBody = (body) => {
    return body.length > 0 ? (
      body.map((item, index) => (
        <tr key={item.id} className=" font-weight-bold ">
          <td>{++index}</td>
          <td>
            <div className="d-flex gap-2">
              <img className="img-avatar " src={`${URL_SERVER}/storage/product/${item.products.image} `} />
              <div className="d-flex flex-column">
                <p>{item.products.name}</p>
                {/* <span id="text-price">{formatter.format(item.products.price)}</span> */}
              </div>
            </div>
          </td>

          <td>
            <div className="d-flex gap-2">
              <img className="img-avatar " src={` ${URL_SERVER}/storage/customer/${item.customers.image} `} />
              <div className="d-flex flex-column">
                <p>{`${item.customers.last_name} ${item.customers.first_name}`}</p>
                <span id="text-price">{item.customers.email}</span>
              </div>
            </div>
          </td>

          <td>{item.point}</td>

          <td>
            <div className="d-flex flex-column">
              <span className="d-flex">
                {Array.from(Array(item.point), (e, i) => {
                  return (
                    <span key={i}>
                      <FaStar />
                    </span>
                  );
                })}
              </span>

              <p className="fw-light text-break text-secondary fs-6">
                {item.content.length <= 10 ? item.content : `${item.content.substring(0, 10)}...`}
              </p>
            </div>
          </td>

          <td>
            <p
              className={`text-center border-radius-2px ${
                item.status === 'pending' ? 'bg-warning-100 text-warning p-2' : 'bg-success-100 text-success p-2'
              }`}
            >
              {item.status === 'pending' ? 'pending' : 'pushlised'}
            </p>
          </td>

          <td>
            <div className="d-flex">
              <button
                id="edit-product"
                onClick={(e) => handleDetailReview(e, item.id)}
                className="cursor-pointer br-6px p-2 bg-gray-100 text-black w-48px h-48px d-flex align-items-center justify-content-center border-none"
              >
                <CgDetailsMore className="font-20px" />
              </button>
              {item.status === 'pending' ? (
                <button
                  id="disabled-user"
                  onClick={() => handleShowModalPublished(item.id)}
                  className=" cursor-pointer br-6px p-2 ms-3 text-success bg-gray-100 w-48px h-48px d-flex align-items-center justify-content-center border-none"
                >
                  <TiTick className="text-success font-20px" />
                </button>
              ) : (
                <button
                  id="disabled-user"
                  onClick={() => handleShowModalDelete(item.id)}
                  className=" cursor-pointer br-6px p-2 ms-3 text-success bg-gray-100 w-48px h-48px d-flex align-items-center justify-content-center border-none"
                >
                  <FaTimesCircle className="text-danger font-20px" />
                </button>
              )}
            </div>
          </td>
        </tr>
      ))
    ) : (
      <>
        <tr key={1} className="text-center">
          <td colSpan={7}>Review is not found.</td>
        </tr>
      </>
    );
  };

  const publishPopup = () => {
    return (
      <div className="modal-content">
        <div className="modal-body">
          <h5>Are you sure pushlish this comment id {isCheck} ?</h5>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-danger"
            // onClick={() => handlePublish()}
          >
            Publish
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => setShowPublished(false)}>
            Close
          </button>
        </div>
      </div>
    );
  };

  const deletePopup = () => {
    return (
      <div className="modal-content">
        <div className="modal-body">
          <h5>Are you sure delete this comment id {isCheck} ?</h5>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" onClick={() => handleDelete()}>
            Delete
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => setShowDelete(false)}>
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <TableLayout tableHeader={props.tableHeader} tableBody={renderTableBody(props.tableBody)} />
        </div>
      </div>
      <Modal
        show={showPublished}
        setStateModal={handleSetStatePublished}
        elementModalTitle="Warning"
        elementModalBody={publishPopup()}
        className="modal-popup"
      />
      <Modal
        show={showDelete}
        setStateModal={handleSetStateDelete}
        elementModalTitle="Warning"
        elementModalBody={deletePopup()}
        className="modal-popup"
      />
    </>
  );
};

export default ReviewTable;
