import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Controller, useForm, useWatch } from 'react-hook-form';
import Select from 'react-select';
import { yupResolver } from '@hookform/resolvers/yup';
import { addSchema } from '../../../adapter/staff';
import { useDispatch } from 'react-redux';
import { BlockUI } from '../../Layouts/Notiflix';
import Notiflix from 'notiflix';
import { ErrorToast, SuccessToast } from '../../Layouts/Alerts';
import { setIsAdd } from '../../../redux/reducer/staff/staff.reducer';
import "./style.css"
import { addStaff } from '../../../api/Staff/staffAPI';

const StaffAdd = props => {
  const data_roles=[
    { value: 1, label: 'Admin' },
    { value: 2, label: 'CTO' },
  ]
  const data_gender=[
    { value: 1, label: 'male' },
    { value: 2, label: 'female' },
  ]
  const { register, handleSubmit,setValue, watch,control, formState: { errors } } = useForm({
      mode: 'onChange',
      resolver: yupResolver(addSchema),
    }
  );
  const dispatch = useDispatch();

  const backtoManageStaff = () => {
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
   const image = await toBase64(data.avatar[0]);
      const resultData = {
        first_name: data.first_name,
        last_name: data.last_name,
        role_id: data.role_id.value,
        gender: data.gender.label,
        phone: data.phone,
        email: data.email,
        password: data.password,
        avatar:  [image],
        status:1,
        address: data.address,
        created_date: '2022-05-05', //data.created_date,
      };
    console.log('data:', resultData);
      const result = await addStaff(resultData);
      console.log('Result:',result);
      Notiflix.Block.remove('#root');
     if (result === 200) {
        SuccessToast('Create product successfully', 3000);
       props.backToStaffList([
          {
            key: 'id',
            value: 'desc',
          },
        ]);
        backtoManageStaff();
      } else if (result === 404) {
        ErrorToast('Create staffs unsuccessfully', 3000);
        Notiflix.Block.remove('#root');
      } else if (result === 401) {
        Notiflix.Block.remove('#root');
      } else {
        Notiflix.Block.remove('#root');
        ErrorToast('Something went wrong. Please try again', 3000);
      }


  }

  return (
    <div className=' edit_form d-flex justify-content-center'>
      <h5 className="text-danger font-weight-bold mb-3">Add Staff</h5>
      <Form className='font_add_edit_prduct' onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data'>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label className="label-input" >First Name</Form.Label>
              <Controller control={control} name="fisrt_name"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control onChange={onChange} value={value} ref={ref}
                                          isInvalid={errors.fisrt_name}
                                          placeholder="Enter fisrt_name" />)}
                          {...register("first_name", {required: true, })}/>
              <div className="d-flex justify-content-between">
                <small className="text-red font-weight-semi">{errors?.first_name?.message}</small>
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="label-input" >Last Name</Form.Label>
              <Controller control={control} name="last_name"
                          defaultValue=""
                          render={({field: {onChange, onBlur, value, ref}}) => (
                            <Form.Control onChange={onChange} value={value} ref={ref}
                                          isInvalid={errors.last_name}
                                          placeholder="Enter last_name" />)}
                          {...register("last_name", {required: true, })}/>
              <div className="d-flex justify-content-between">
                <small className="text-red font-weight-semi">{errors?.last_name?.message}</small>
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label className="label-input" >Phone</Form.Label>
              <Controller control={control} name="phone"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control onChange={onChange} value={value} ref={ref}
                                          isInvalid={errors.phone}
                                          placeholder="Enter phone" />)}
                          {...register("phone", {required: true,pattern:/^0[3|7|8|9|5]\d{7,8}$/ })}/>
              <div className="d-flex justify-content-between">
                <small className="text-red font-weight-semi">{errors?.phone?.message}</small>
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="label-input" >Email</Form.Label>
              <Controller control={control} name="email"
                          defaultValue=""
                          render={({field: {onChange, onBlur, value, ref}}) => (
                            <Form.Control onChange={onChange} value={value} ref={ref}
                                          isInvalid={errors.email}
                                          placeholder="Enter email" />)}
                          {...register("email", {
                            required: true,
                            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                          })}/>
              <div className="d-flex justify-content-between">
                <small className="text-red font-weight-semi">{errors?.email?.message}</small>
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label className="label-input" >Password</Form.Label>
              <Controller control={control} name="password"
                          defaultValue=""
                          render={({ field: { onChange, onBlur, value, ref } }) => (
                            <Form.Control onChange={onChange} value={value} ref={ref} type="password"
                                          isInvalid={errors.password}
                                          placeholder="Enter password" />)}
                          {...register("password", {
                            required: true,
                            minLength: 8,

                          })}/>
              <div className="d-flex justify-content-between">
                <small className="text-red font-weight-semi">{errors?.password?.message}</small>
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="label-input" >Created date</Form.Label>
              <Controller control={control} name="created_date"
                          defaultValue=""
                          render={({field: {onChange, onBlur, value, ref}}) => (
                            <Form.Control  onChange={onChange} value={value} ref={ref} type="date"
                                          isInvalid={errors.created_date}
                                          placeholder="Enter created date" />)}
                          {...register("created_date", {required: true, })}/>
              <div className="d-flex justify-content-between">
                <small className="text-red font-weight-semi">{errors?.created_date?.message}</small>
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label className="label-input" >Role</Form.Label>
              <Controller
                name="role_id"
                rules={{ required: true }}
                control={control}
                render={({ field }) => <Select
                  {...field}
                  options={data_roles}
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
              <div className="d-flex justify-content-between">
                <small className="text-red font-weight-semi">{errors?.role_id?.message}</small>
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="label-input" >Gender</Form.Label>
              <Controller
                name="gender"
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
                {...register("gender", {required: true, })}
              />
              <div className="d-flex justify-content-between">
                <small className="text-red font-weight-semi">{errors?.gender?.message}</small>
              </div>

            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" >
          <Form.Label className="label-input">Avatar</Form.Label>
          <Form.Control id="avatar" type="file" {...register('avatar')} />
          {/*<Controller control={control} name="avatar"
                      defaultValue=""
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Control
                          value={value} ref={ref} type="file"

                          placeholder="Upload avatar"
                          {...register("avatar", {required: true, })}/>

                      )} />*/}

        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label className="label-input" >Address</Form.Label>
          <Controller control={control} name="address"
                      defaultValue=""
                      render={({ field: { onChange, onBlur, value, ref } }) => (
                        <Form.Control
                          onChange={onChange} value={value} ref={ref} type="address"
                          isInvalid={errors.address}
                          placeholder="Enter address"
                          {...register("address", {required: true, })}/>

                      )} />
          <div className="d-flex justify-content-between">
            <small className="text-red font-weight-semi">{errors?.address?.message}</small>
          </div>

        </Form.Group>


        <div className='d-flex justify-content-end p-2 mt-3'>
          <Button
            id='product-save-btn'
            variant='danger'
            type='submit'
            className='font-weight-bold me-3'
          >
            Save
          </Button>
          <Button
            id='product-save-cancel'
            onClick={() => backtoManageStaff()}
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

StaffAdd.propTypes = {};

export default StaffAdd;