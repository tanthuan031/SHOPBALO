import React, { useState,useRef } from 'react';
import { FaPen, FaTimesCircle, FaTransgender } from 'react-icons/fa';
import Modal from '../Layouts/Modal';
import TableLayout from '../Layouts/Table';
import './style.css';
import { URL_SERVER } from '../../utils/urlPath';
import AutoSendMail from '../Layouts/AutoSendMail';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiMail, } from 'react-icons/hi';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { GrStatusUnknown } from 'react-icons/gr';
import AutoCallPhone from '../Layouts/AutoCallPhone';
import { setIsEdit  } from '../../redux/reducer/staff/staff.reducer';
import Notiflix from 'notiflix';
import { ErrorToast } from '../Layouts/Alerts';
import { getStaffById } from '../../api/Staff/staffAPI';
import { setStaff } from '../../redux/reducer/staff/staff.reducer';
import { useDispatch } from 'react-redux';

export function StaffTable(props) {
  const [show, setShowDetail] =  useState(false);
  const [detailStaff,setDetailStaff] = useState('');
  const inputRef=useRef()
  const dispatch = useDispatch();
  const showDetail = (item) => {
    setShowDetail(true);
    setDetailStaff(item.item)
  };
  const handleAutoSendMail = (email) => {
    window.location.href = `mailto:${email}?subject=Hello.Nice to Meet You&body=message%20goes%20here`
  }
  const handleAutoCallPhone=(phoneNumber) => {
    window.open(`tel:${phoneNumber}`)
  }
  const handleEditStaff = async (e, id) => {
    e.stopPropagation();
    const data = await getStaffById(id);
    console.log('edit', data);
    if (Object.keys(data).length > 0) {
      dispatch(setStaff(data));
      dispatch(setIsEdit(true));
    } else if (data === 401) {
      Notiflix.Block.remove('#root');
    } else {
      Notiflix.Block.remove('#root');
      ErrorToast('Something went wrong. Please try again', 3000);
    }
  };
  const renderTableBody = () => {
    return props.tableBody.map((item) => {
      return (
        <tr  key={item.id} className="row-data" onClick={()=>showDetail({item})}>
          <td  > <img  className="img-avatar " src={ `${URL_SERVER}/storage/staff/${item.avatar} `}/></td>
          <td className='col-txt'>{`${item.first_name} ${item.last_name}`}
              <small className="sub-txt">Gender: {item.gender}</small>
          </td>
          <td>{item.role_name}</td>

          <td className='col-txt'>
            Email:<span className='col-txt-md'>{item.email}</span> <br />
            Phone: <span className='col-txt-md'>{item.phone}</span>
          </td>

          <td >
            <p
            className={`text-center border-radius-2px ${
              item.status === 1 ? 'bg-success-100 text-success' : 'bg-red-100 text-red '
            }`}
          >
            {item.status ? 'active' : 'disabled'}
          </p>
          </td>
          <td>
            <div className="d-flex">
              <button
                id="edit-staff"
                onClick={(e) =>handleEditStaff(e, item.id)}

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
  const renderDetailStaff = (item) => {
    console.log(typeof item.email);
    return (
        <div className='card-overlay'>
        <div className='card-image-overlay'>
          <img className='avatar-detail' src={ `${URL_SERVER}/storage/staff/${item.avatar}`}/>

            <p className='card-txt card-txt-title'>{`${item.first_name} ${item.last_name}`}</p>
            <p className='card-txt'>
              <BsFillTelephoneFill  className='icon'/>
              <AutoCallPhone onClick={()=>handleAutoCallPhone(item.phone)} phoneNumber={item.phone} />
            </p>
            <p className='card-txt'> <HiMail className='cursor-pointer spinner icon'/>
              <AutoSendMail  onClick={()=>handleAutoSendMail(item.email)} email={item.email} className='spinner' />
            </p>
        </div>
        <div className='card-content-overlay'>
          <p className='card-txt-content'>
            <MdOutlineManageAccounts className='icon' />{item.role_name}
          </p>
          <p className='card-txt-content'><FaTransgender className='icon'  /> {item.gender}</p>
          <p className='card-txt-content'> <FiMapPin className='icon' /> {item.address}</p>
          <p className='card-txt-content'> <GrStatusUnknown className='icon' /> {item.status?'active':'disabled'}</p>
          <p className='card-txt-content'> <strong>First date working:</strong> {item.created_date}</p>
        </div>
        </div>

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
        isHeader={false}
        className="modal-md"
        setStateModal={() => setShowDetail(false)}
        elementModalTitle="Detail Staff"
        elementModalBody={renderDetailStaff(detailStaff)}
      />
    </>
  );
}
