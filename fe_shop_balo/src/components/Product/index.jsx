import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaPen, FaTimesCircle } from 'react-icons/fa';
import Modal from '../Layouts/Modal';

import TableLayout from '../Layouts/Table';
export function ProductTable(props) {
  const [show, setShowDetail] = useState(false);

  const showDetail = (id) => {
    setShowDetail(true);
    // setIdProduct(id);
  };
  const renderTableBody = () => {
    return props.tableBody.map((item) => {
      return (
        <tr key={item.id} className="cursor-pointer" onClick={() => showDetail(item.id)}>
          <td>{item.id}</td>
          <td>{item.category}</td>
          <td>{item.name}</td>
          {/* <td>{item.description}</td> */}
          <td>{item.amount}</td>
          <td>{item.price}</td>
          {/* <td>{item.image}</td> */}
          <td>{item.active ? 'active' : 'disabled'}</td>
          <td>
            <div className="d-flex">
              <button
                id="edit-product"
                // onClick={(e) => {
                //   // handleEditUser(e, item.id);
                // }}
                className="br-6px p-2 bg-gray-100 text-black w-48px h-48px d-flex align-items-center justify-content-center border-none"
              >
                <FaPen className="font-20px" />
              </button>
              <button
                id="disabled-user"
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
        <h1>Name: Laptop HP</h1>
        <div>Description: lalalalalalalalalalalalalalalalalal</div>
        <div>Image: khwgfv</div>
      </>
    );
  };

  return (
    <>
      <div className="container-fluid mt-5">
        <h5 className="text-danger  mb-3 text-end">
          <Button className="btn btn-success"> Create new product</Button>
        </h5>
        <div className="row justify-content-center">
          <TableLayout tableHeader={props.tableHeader} tableBody={renderTableBody()} />
        </div>
      </div>

      <Modal
        show={show}
        setStateModal={() => setShowDetail(false)}
        elementModalTitle="Detail product"
        elementModalBody={renderDetailProduct()}
      />
    </>
  );
}
