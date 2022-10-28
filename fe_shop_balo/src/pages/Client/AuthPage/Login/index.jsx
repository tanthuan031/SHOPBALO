// @flow
import * as React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import FormLogin from '../../../../components/client/Auth/Login';
import './style.css';
export function LoginPage() {
  return (
    <section className="section-root-login">
      <div className="sl-box">
        <div className="sl-box-header">
          <h3>WEBCOME TO MY PAGE</h3>
          <FaRegUserCircle />
        </div>

        <div className="sl-box-body">
          <FormLogin />
        </div>
      </div>
    </section>
  );
}
