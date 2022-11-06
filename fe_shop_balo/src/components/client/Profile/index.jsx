import React from 'react';
import { FaPhoneAlt, FaRegEdit, FaRegEnvelope } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import ImageCustom from '../../commons/Layouts/Image';

import { FaAward, FaFemale, FaMale, FaMapMarkerAlt } from 'react-icons/fa';
import { GrStatusUnknown } from 'react-icons/gr';
import AutoCallPhone from '../../commons/Layouts/AutoCallPhone';
import AutoSendMail from '../../commons/Layouts/AutoSendMail';
import './style.css';
import { useDispatch } from 'react-redux';
import { setIsEditProfile } from '../../../redux/reducer/profile/profile.reducer';
export default function ProfileClient() {
  const dispatch = useDispatch();
  return (
    <>
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
        <div className="col-md-3 info-account-header-item ml-3">
          <div>
            <h3 className="font-weight-black text-center pt-5 ">POIN</h3>
            <div className="font-weight-black text-center pt-3">1000</div>
          </div>

          <hr />
          <div>
            <h4 className="font-weight-black text-center pt-5 ">Total number orders</h4>
            <div className="font-weight-black text-center pt-3">1000</div>
          </div>
        </div>
        <div className="col-md-5"></div>
      </div>

      <div className="row info-account-header mt-5">
        <div className="col-md-12 info-account-header-item">
          <div className="row info-cusstomer-header">
            <div
              className="col-md-12 font-weight-black pt-5 d-flex justify-content-end padding-right-12x"
              onClick={() => dispatch(setIsEditProfile(true))}
            >
              <FaRegEdit className="cursor-pointer font-24px" />
            </div>
          </div>
          <div className="row info-cusstomer-header">
            <div className="col-md-12">
              <h3 className="font-weight-black text-center pt-2  ">Information Cusstomer</h3>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6 p-5 info-customer">
              <div className="row p-2">
                <div className="col-md-3">Fullname: </div>
                <div className="col-md-9">Ho Tan Thuan</div>
              </div>
              <div className="row p-2">
                <div className="col-md-3">Phone: </div>
                <div className="col-md-9">083450475</div>
              </div>
              <div className="row p-2">
                <div className="col-md-3">Email: </div>
                <div className="col-md-9">tanthuan@gmail.com</div>
              </div>
            </div>
            <div className="col-md-6 p-5">
              <div className="row p-2">
                <div className="col-md-3">Gender: </div>
                <div className="col-md-9"></div>
              </div>
              <div className="row p-2">
                <div className="col-md-3">Join Date: </div>
                <div className="col-md-9">083450475</div>
              </div>
              <div className="row p-2">
                <div className="col-md-3">Address: </div>
                <div className="col-md-9">Ho Tan Thuan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
