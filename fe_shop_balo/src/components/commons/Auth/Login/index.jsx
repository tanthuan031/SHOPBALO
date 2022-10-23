import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../../../../adapter/auth';
import { handleLogin, setCookies } from '../../../../api/Auth';
import { BlockUI } from '../../Layouts/Notiflix';
import { ErrorToast, SuccessToast } from '../../Layouts/Alerts';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { setIsForgotPassword, setIsLogin } from '../../../../redux/reducer/auth/auth.reducer';

export default function FormLogin() {
  const [typePassword, setShowPassword] = useState('password');
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit = async (data) => {
    // handleLogin(data);
    BlockUI('.sl-box');
    const result = await handleLogin(data);

    if (result.status === 403 || result.status === 422) {
      ErrorToast('Email or password is incorrect. Please try again', 3500);
      Notiflix.Block.remove('.sl-box');
      return;
    }
    if (result.status === 401) {
      ErrorToast('Your account has been locked.', 3500);
      Notiflix.Block.remove('.sl-box');
      return;
    }
    if (result.data.status === 200) {
      SuccessToast('Logged in successfully', 2000);
      setCookies('token', result.data.token, 1);
      // Notiflix.Block.remove('.sl-box');
      setTimeout(() => {
        window.location.href = '/admin/';
      }, 1000);
      return;
    }
  };
  const handleForgorPW = () => {
    dispatch(setIsForgotPassword(true));
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3 form-user">
          <Form.Label className="font-weight-bold">
            Email&nbsp;<span className="text-danger">*</span>
          </Form.Label>
          <Form.Control {...register('email')} type="text" />
        </Form.Group>

        <Form.Group className="mb-2 form-password">
          <Form.Label className="font-weight-bold">
            Password&nbsp;<span className="text-danger">*</span>
          </Form.Label>
          <div className="fp-input">
            <Form.Control {...register('password')} type={typePassword} />
            {typePassword === 'text' ? (
              <FaEye onClick={() => setShowPassword('password')} />
            ) : (
              <FaEyeSlash onClick={() => setShowPassword('text')} />
            )}
          </div>
        </Form.Group>
        <Form.Group className="mb-3 text-end ">
          <span className="text-danger font-weight-bold text-end cursor-pointer " onClick={handleForgorPW}>
            Fogot password ?
          </span>
        </Form.Group>
        <div className="d-grid gap-2">
          <Button variant="danger" disabled={!isValid} className="font-weight-bold" type="submit">
            Login
          </Button>
        </div>
      </Form>
    </>
  );
}
