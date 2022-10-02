import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Controller, useForm, useWatch } from 'react-hook-form';
import Select from 'react-select';
import { yupResolver } from '@hookform/resolvers/yup';
import { addSchema } from '../../../adapter/customer';
import { useDispatch } from 'react-redux';
import { BlockUI } from '../../Layouts/Notiflix';
import Notiflix from 'notiflix';
import { ErrorToast, SuccessToast } from '../../Layouts/Alerts';
import { setIsAdd } from '../../../redux/reducer/customer/customer.reducer';
import './style.css';
import { addCustomer } from '../../../api/Customer/customerAPI';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { URL_SERVER } from '../../../utils/urlPath';
import { formatDate } from '../../../utils/formatDate';

const CustomerAdd = props => {
  const data_gender = [
    { value: 1, label: 'male' },
    { value: 2, label: 'female' },
  ];
  const [showPassword, setShowPassword] = useState(false);
  const [imageAvatarCustomerShow,setImageAvatarCustomerShow] = useState(false);
  const { register, handleSubmit, setValue, watch, control, formState: { errors,isValid } } = useForm({
      mode: 'onChange',
      resolver: yupResolver(addSchema),
    },
  );
  const dispatch = useDispatch();

  const backtoManageCustomer = () => {
    dispatch(setIsAdd(false));

  };
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const onSubmit = async (data) => {

    BlockUI('#root', 'fixed');
   // console.log('Date:',data.created_date);
    if(data.created_date) data.created_date=formatDate(data.created_date,'YYYY-MM-DD')
    const image = await toBase64(data.avatar[0]);
    const resultData = {
      first_name: data.first_name,
      last_name: data.last_name,
      gender: data.gender.label,
      phone: data.phone,
      email: data.email,
      password: data.password,
      point:0,
      avatar: [image],
      status: 1,
      address: data.address,
      created_date:  data.created_date,
    };
   console.log('data:', resultData);
    const result = await addCustomer(resultData);
    console.log('Result:', result);
    Notiflix.Block.remove('#root');
    if (result === 200) {
      SuccessToast('Create customer successfully', 3000);
      props.backToCustomerList([
        {
          key: 'id',
          value: 'desc',
        },
      ]);
      backtoManageCustomer();
    } else if (result === 404) {
      ErrorToast('Create customer unsuccessfully', 3000);
      Notiflix.Block.remove('#root');
    } else if (result === 401) {
      Notiflix.Block.remove('#root');
    } else if (result ===402)
      ErrorToast('Email or phone numbers have existed!', 3000);
    else {
      Notiflix.Block.remove('#root');
      ErrorToast('Something went wrong. Please try again', 4000);
    }
  };
  const uploadImage = (e) => {
    let image = e.target.files[0];
    if (e.target.files.length > 0) {
      setImageAvatarCustomerShow(URL.createObjectURL(image))
    }

  };

  return (
    <div className=' edit_form d-flex justify-content-center'>

      <Form className='font_add_edit_prduct' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
        <h5 className='text-danger font-weight-bold mb-3'>Add Customer</h5>
        <Row>
          <Col>
            <Form.Group className='mb-3' >
              <Form.Label className='label-input'>First Name</Form.Label>
              <Controller control={control} name="fisrt_name"
                          defaultValue=""
                          {...register("first_name", {required: true, })} ref={null}
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control onChange={onChange} value={value} ref={ref}
                                          isInvalid={errors.fisrt_name}
                                          placeholder="Enter fisrt_name"

                            />)}
              />
              <div className='d-flex justify-content-between'>
                <small className='text-red font-weight-semi'>{errors?.first_name?.message}</small>
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3' >
              <Form.Label className='label-input'>Last Name</Form.Label>
              <Controller control={control} name='last_name'
                          defaultValue=''
                          {...register('last_name', { required: true })} ref={null}
                          render={({ field: { onChange, onBlur, value,ref} }) => (
                            <Form.Control onChange={onChange} value={value} ref={ref}
                                          isInvalid={errors.last_name}
                                          placeholder='Enter last_name'
                            />)}
              />
              <div className='d-flex justify-content-between'>
                <small className='text-red font-weight-semi'>{errors?.last_name?.message}</small>
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className='mb-3' >
              <Form.Label className='label-input'>Phone</Form.Label>
              <Controller control={control} name='phone'
                          defaultValue=''
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control onChange={onChange} value={value} ref={ref}
                                          isInvalid={errors.phone}
                                          placeholder='Enter phone'
                                          {...register('phone', { required: true, pattern: /^0[3|7|8|9|5]\d{7,8}$/ })}
                            />)}
              />
              <div className='d-flex justify-content-between'>
                <small className='text-red font-weight-semi'>{errors?.phone?.message}</small>
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3' >
              <Form.Label className='label-input'>Email</Form.Label>
              <Controller control={control} name='email'
                          defaultValue=''
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control onChange={onChange} value={value} ref={ref}
                                          isInvalid={errors.email}
                                          placeholder='Enter email'
                                          {...register('email', {
                                            required: true,
                                            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                          })}/>)}
              />
              <div className='d-flex justify-content-between'>
                <small className='text-red font-weight-semi'>{errors?.email?.message}</small>
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className='mb-3'>
              <Form.Label className='label-input'>Password</Form.Label>
              <Controller control={control} name='password'
                          defaultValue=''
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control onChange={onChange} value={value} ref={ref}
                                          type={showPassword ? 'text' : 'password'}
                                          isInvalid={errors.password}
                                          placeholder='Enter password'
                                          className='input-password'
                                          {...register('password', {
                                            required: true,
                                            minLength: 8,

                                          })}/>)}

              />
              <span onClick={()=>setShowPassword(!showPassword)}>
                    {showPassword ? <AiFillEyeInvisible className='show-pass-icon' /> : <AiFillEye className='show-pass-icon' />}
                </span>

              <div className='d-flex justify-content-between'>
                <small className='text-red font-weight-semi'>{errors?.password?.message}</small>
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3' >
              <Form.Label className='label-input'>Gender</Form.Label>
              <Controller
                name='gender'
                control={control}
                render={({ field }) => <Select
                  {...field}
                  options={data_gender}
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: '#f9d2e4',
                      primary50: '#f9d2e4',
                      primary: '#d6001c',
                    },
                  })}
                />}

              />
              <div className='d-flex justify-content-between'>
                <small className='text-red font-weight-semi'>{errors?.gender?.message}</small>
              </div>

            </Form.Group>
          </Col>

        </Row>
        <Row>
          <Col>
            <Form.Group className='mb-3' >
              <Form.Label className='label-input'>Address</Form.Label>
              <Controller control={control} name='address'
                          defaultValue=''
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control
                              onChange={onChange} value={value} ref={ref} type='address'
                              isInvalid={errors.address}
                              placeholder='Enter address'
                              {...register('address', { required: true })} />

                          )} />
              <div className='d-flex justify-content-between'>
                <small className='text-red font-weight-semi'>{errors?.address?.message}</small>
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='mb-3'>
              <Form.Label className='label-input'>Created date</Form.Label>
              <Controller control={control} name='created_date'
                          defaultValue=''
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control onChange={onChange} value={value} ref={ref} type='date'
                                          isInvalid={errors.created_date}
                                          placeholder='Enter created date'
                                          {...register('created_date', { required: true })}/>)}
              />
              <div className='d-flex justify-content-between'>
                <small className='text-red font-weight-semi'>{errors?.created_date?.message}</small>
              </div>
            </Form.Group>
          </Col>

        </Row>


        <Form.Group className='mb-3'>
          <Form.Label className='label-input'>Avatar</Form.Label>
          <Form.Control id='avatar' type='file' {...register('avatar')} onChange={ e=>uploadImage(e)} />
          {imageAvatarCustomerShow &&
            <div className="d-flex container-avatar">
              <img className="img-responsive image-avatar" src={imageAvatarCustomerShow}  alt={'avatar'}/>
            </div>
          }
        </Form.Group>

        <div className='d-flex justify-content-end p-2 mt-3'>
          <Button
            id='product-save-btn'
            variant='danger'
            type='submit'
            className='font-weight-bold me-3'
            disabled={!isValid}
          >
            Save
          </Button>
          <Button
            id='product-save-cancel'
            onClick={() => backtoManageCustomer()}
            variant='outline-secondary'
            className='font-weight-bold'
          >
            Cancel
          </Button>
        </div>

      </Form>
    </div>
  );
};

CustomerAdd.propTypes = {};

export default CustomerAdd;