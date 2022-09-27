import React from 'react';
import { FaPen, FaTimesCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setIdEditStatus, setIsEdit } from '../../redux/reducer/order/order.reducer';
import TableLayout from '../Layouts/Table';
// import './style.css';
export function OrderTable(props) {
  const dispatch = useDispatch();
  const handleEditOrder = (e, status) => {
    e.stopPropagation();
    dispatch(setIsEdit(true));
    dispatch(setIdEditStatus(status));
  };
  const renderTableBody = () => {
    return props.tableBody.map((item, index) => {
      return (
        <tr
          key={item.order_id}
          className="cursor-pointer font-weight-bold "
          //   onClick={() => handleShowDetail(item.order_id, item.image_slorder_ide)}
        >
          <td>{item.order_id} </td>
          <td>{item.customer_lastname + ' ' + item.customer_firstname}</td>
          {/* Status: 1. Cho xac nhan 2.Xac nhan 3.Dang giao hang 4.Giao hang thanh cong 5. Giao hang that bai  6. Da hoan thanh 7 that bai */}
          <td>
            {(() => {
              if (item.status === 1) {
                return <span className="text-warning">Wait for confirmation...</span>;
              } else if (item.status === 2) {
                return <span className="text-success"> Confirm !</span>;
              } else if (item.status === 3) {
                return <span className="text-info"> Delivery</span>;
              } else if (item.status === 4) {
                return <span className="text-success"> Successfully delivery</span>;
              } else if (item.status === 5) {
                return <span className="text-danger"> Delivery failed</span>;
              } else if (item.status === 6) {
                return <span className="text-success"> Successfully</span>;
              } else {
                return <span className="text-danger"> Failed</span>;
              }
            })()}
          </td>
          <td>{item.discount}</td>
          {/* <td>{item.description}</td> */}
          <td>{item.total_price}</td>
          <td>{item.discount_value}</td>
          {/* <td>{item.image}</td> */}
          <td>{item.created_order_date}</td>
          <td>
            <div className="d-flex">
              <button
                id="edit-product"
                onClick={(e) => {
                  handleEditOrder(e, item.status);
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

  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <TableLayout tableHeader={props.tableHeader} tableBody={renderTableBody()} />
        </div>
      </div>
    </>
  );
}
