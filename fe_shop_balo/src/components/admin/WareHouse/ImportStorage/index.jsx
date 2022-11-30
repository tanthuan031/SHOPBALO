import React, { useRef } from 'react';
import { FaFileExport, FaFileImport, FaPen, FaPrint, FaTimesCircle } from 'react-icons/fa';
import { useReactToPrint } from 'react-to-print';
import { formatDate } from '../../../../utils/formatDate';
import TableLayout from '../../../commons/Layouts/Table';
import { useDispatch, useSelector } from 'react-redux';

import './style.css';
import { setImportPrint, setImportPrintContent } from '../../../../redux/reducer/warehouse/warehouse.reducer';
export function ImportTable(props) {
  const dispatch = useDispatch();
  const handlePrint = (data) => {
    dispatch(setImportPrint(true));
    dispatch(setImportPrintContent(data));
  };
  const renderTableBody = () => {
    return props.tableBody.map((item, index) => {
      return (
        <tr key={item.id} className="cursor-pointer font-weight-bold row-data">
          <td>{index + 1}</td>
          <td>{item.products.id}</td>
          <td>{item.provider_id}</td>
          <td>{item.products.name}</td>
          <td>{item.import_amount}</td>
          <td>{item.providers.name}</td>
          <td>{formatDate(item.created_at, 'YYYY-MM-DD')}</td>
          <td>
            <div className="d-flex">
              <button
                id="improt_product"
                onClick={() => handlePrint(item)}
                className="br-6px p-2 bg-gray-100 text-black w-48px h-48px d-flex align-items-center justify-content-center border-none"
              >
                <FaPrint className="font-20px" />
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
