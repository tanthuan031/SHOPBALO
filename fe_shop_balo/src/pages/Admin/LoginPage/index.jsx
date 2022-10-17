// @flow
import * as React from 'react';
import FormLogin from '../../../components/Auth/Login';
import './style.css';
export function LoginPage(props) {
  return (
    <>
      <section className="section-login">
        <div className="sl-box">
          <h4 className="mt-2 font-weight-bold text-center">Welcome back</h4>
          <h6 className="mt-2">
            Login to your&nbsp;<span className="font-weight-bold">account</span>
          </h6>
          <div className="mt-4">
            <FormLogin />
          </div>
        </div>
      </section>
    </>
  );
}
