import React from 'react';
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import ImageCustom from '../../commons/Layouts/Image';

import { FaAward, FaFemale, FaMale, FaMapMarkerAlt } from 'react-icons/fa';
import { GrStatusUnknown } from 'react-icons/gr';
import AutoCallPhone from '../../commons/Layouts/AutoCallPhone';
import AutoSendMail from '../../commons/Layouts/AutoSendMail';
import './style.css';
export default function ProfileClient() {
  return (
    <div className="row info-account-header">
      <div className="col-md-8 info-account-header-item">
        <div className="info-account-top"></div>
        <div className="card-txt avatar-account">
          <ImageCustom src={`$/storage/customer/${'gterhy'}`} className="w-100 avatar-image-account" />
        </div>
        <div className="info-account-contain">
          <h3 className="font-weight-black ">admin</h3>
          <p>
            <FaPhoneAlt className="icon" />
            {<AutoCallPhone phoneNumber="039999999999" />}
          </p>
          <p>
            <FaRegEnvelope className="icon" />
            {<AutoSendMail email={'a@gmail.com'} className="spinner" />}
          </p>
        </div>
      </div>
      {/* <div className="col-md-1"></div> */}
      <div className="col-md-3 info-account-header-item ml-3">
        <h3 className="font-weight-black text-center pt-5 ">POIN</h3>
      </div>
      <div className="col-md-5"></div>
    </div>
  );
}
