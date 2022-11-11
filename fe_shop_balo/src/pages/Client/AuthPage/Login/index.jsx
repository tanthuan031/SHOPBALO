// @flow
import * as React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import FormForgotPWClient from '../../../../components/client/Auth/ForgotPassword';
import FormNewPasswordClient from '../../../../components/client/Auth/ForgotPassword/newpassword';
import FormLogin from '../../../../components/client/Auth/Login';
import { isForgotPasswordSelectorClient, isForgotPasswordVerifiedSelectorClient } from '../../../../redux/selectors';
import './style.css';
export function LoginPage() {
  const isForgotPasswordClient = useSelector(isForgotPasswordSelectorClient);
  const isForgotPasswordVerifiedClient = useSelector(isForgotPasswordVerifiedSelectorClient);
  return (
    <section>
      <div className="mt-3">
        {isForgotPasswordClient ? (
          isForgotPasswordVerifiedClient ? (
            <FormNewPasswordClient />
          ) : (
            <FormForgotPWClient />
          )
        ) : (
          <FormLogin />
        )}
      </div>
      {/* <FormLogin />; */}
    </section>
  );
}
