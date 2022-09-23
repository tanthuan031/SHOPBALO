import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaPen, FaTimesCircle } from 'react-icons/fa';
import Modal from '../Layouts/Modal';

import TableLayout from '../Layouts/Table';
import './style.css';
import { URL_SERVER } from '../../utils/urlPath';

export function StaffTable(props) {
  const [show, setShowDetail] =  useState(false);

  const showDetail = (id) => {
    setShowDetail(true);
    // setIdstaff(id);
  };
  const renderTableBody = () => {
    return props.tableBody.map((item) => {
      return (
        <tr key={item.id} className="cursor-pointer" onClick={() => showDetail(item.id)}>
          <td>{item.id}</td>
          <td>{item.role_name}</td>
          <td>{`${item.first_name} ${item.last_name}`}</td>
          <td>{item.email}</td>
          <td> <img  className="img-avatar " src={ `${URL_SERVER}/storage/staff/${item.avatar} `}/></td>
          <td>{item.status ? 'active' : 'disabled'}</td>
          <td>
            <div className="d-flex">
              <button
                id="edit-staff"
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
  const renderDetailstaff = () => {
    return (
      <>
        <h1>Name: Staff Nguyen Van A</h1>
        <div>Description: lalalalalalalalalalalalalalalalalal</div>
        <div>Image: khwgfv</div>
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
        elementModalTitle="Detail staff"
        elementModalBody={renderDetailstaff()}
      />
    </>
  );
}
