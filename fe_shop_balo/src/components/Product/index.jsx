import Notiflix from 'notiflix';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { FaPen, FaTimesCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { getProductById } from '../../api/Product/productAPI';
import { getStorageImage } from '../../api/StorageImage';
import { setIsEdit, setProduct } from '../../redux/reducer/product/product.reducer';
import { formatter } from '../../utils/formatCurrency';
import { ErrorToast } from '../Layouts/Alerts';
import Modal from '../Layouts/Modal';
import { BlockUI } from '../Layouts/Notiflix';
import TableLayout from '../Layouts/Table';
import './style.css';
export function ProductTable(props) {
  const [show, setShowDetail] = useState(false);
  const [dataImageSlide, setDataImage] = React.useState([]);
  const [detailProduct, setProductDetail] = useState({});
  const dispatch = useDispatch();

  const handleShowDetail = async (id, image) => {
    BlockUI('#root', 'fixed');
    const urlArrayImageSlide = 'ProductSlide?cat=' + image;
    const result = await getProductById(id);
    const imageProductSlice = await getStorageImage(urlArrayImageSlide);
    Notiflix.Block.remove('#root');
    setShowDetail(true);
    if (result === 401) {
      return false;
    } else if (result === 500) {
      return false;
    } else {
      setProductDetail({ ...result });
    }
    setDataImage(imageProductSlice);
  };
  const handleEditProduct = async (e, id) => {
    BlockUI('#root', 'fixed');
    e.stopPropagation();
    // console.log('f', id);
    const data = await getProductById(id);
    Notiflix.Block.remove('#root');
    if (Object.keys(data).length > 0) {
      dispatch(setProduct(data));
      dispatch(setIsEdit(true));
    } else if (data === 401) {
      Notiflix.Block.remove('#root');
    } else {
      Notiflix.Block.remove('#root');
      ErrorToast('Something went wrong. Please try again', 3000);
    }
  };
  const renderTableBody = () => {
    return props.tableBody.map((item, index) => {
      return (
        <tr
          key={item.id}
          className="cursor-pointer font-weight-bold "
          onClick={() => handleShowDetail(item.id, item.image_slide)}
        >
          <td>{item.id}</td>
          <td>{item.category_name}</td>
          <td>{item.name}</td>
          {/* <td>{item.description}</td> */}
          <td>{item.amount}</td>
          <td>{formatter.format(item.price)}</td>
          {/* <td>{item.image}</td> */}
          <td>
            <p
              className={`text-center border-radius-2px ${
                item.status === '0' ? 'bg-success-100 text-success' : 'bg-red-100 text-red '
              }`}
            >
              {item.status === '0' ? 'Active' : 'Out of stock'}
            </p>
          </td>
          <td>
            <div className="d-flex">
              <button
                id="edit-product"
                onClick={(e) => {
                  handleEditProduct(e, item.id);
                }}
                className="br-6px p-2 bg-gray-100 text-black w-48px h-48px d-flex align-items-center justify-content-center border-none"
              >
                <FaPen className="font-20px" />
              </button>
              <button
                id="delete-product"
                // onClick={(e) => {
                //   handleCheckDisabledUser(e, item.id);
                // }}
                className="br-6px p-2 ms-3 text-danger bg-gray-100 w-48px h-48px d-flex align-items-center justify-content-center border-none"
              >
                <FaTimesCircle className="text-danger font-20px" />
              </button>
            </div>
          </td>
        </tr>
      );
    });
  };
  const renderDetailProduct = () => {
    return (
      <>
        <div className="row ">
          <div className="col col-md-6 model-detail-product-left ">
            <Carousel variant="dark" nextIcon="" prevIcon="">
              {dataImageSlide.map((value, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      src={`${value}`}
                      // alt={props.urlImage}
                      width="100%"
                      height="70%"
                      className="d-block w-100 app-border-8px image-product-detail d-flex justify-content-center"
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <div className="col col-md-6 model-detail-product-right">
            <h3 className="title-name-product-detail">{detailProduct.name}</h3>
            <div>
              <div
                className="description-product-detail"
                dangerouslySetInnerHTML={{ __html: detailProduct.description }}
              ></div>
              <p className="text-product-detail">Color </p>
              <p className="color-product-detail"></p>
              <p className="text-product-detail">Price : {formatter.format(detailProduct.price)}</p>
              <p className="text-product-detail">Status : {detailProduct.amount > 0 ? 'Active' : 'Out of stock'}</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <TableLayout tableHeader={props.tableHeader} tableBody={renderTableBody()} />
        </div>
      </div>

      <Modal
        show={show}
        setStateModal={() => setShowDetail(false)}
        elementModalTitle="Detail product"
        elementModalBody={renderDetailProduct()}
        className="model-xl modal-product-detail"
      />
    </>
  );
}
