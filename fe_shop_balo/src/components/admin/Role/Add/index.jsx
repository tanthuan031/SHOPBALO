import { default as React, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { deleteCookie, getCookies } from '../../../../api/Admin/Auth';
import { setExpiredToken } from '../../../../redux/reducer/auth/auth.reducer';
import { addSchemaRole } from '../../../../adapter/role';
import { setIsAdd } from '../../../../redux/reducer/role/role.reducer';
import ToggleButton from '../../../commons/Layouts/ToggleButton';
import "./style.css"

const RoleAdd = (props) => {
  const Checked = () => <>🤪</>;
  const UnChecked = () => <>🙂</>;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(addSchemaRole),
  });
  const dispatch = useDispatch();

  const backtoManageRole = () => {
    dispatch(setIsAdd(false));
  };

  const onSubmit = async (data) => {
    console.log(data);
  //   BlockUI('#root', 'fixed');
  //   if (data.created_date) data.created_date = formatDate(data.created_date, 'YYYY-MM-DD');
  //
  //   const image = !!data.avatar[0]?[await toBase64(data.avatar[0])]:`avatarGR-${data.last_name.slice(0,1)}`
  //   const resultData = {
  //     first_name: data.first_name,
  //     last_name: data.last_name,
  //     role_id: data.role_id.value,
  //     gender: data.gender.label,
  //     phone: data.phone,
  //     email: data.email,
  //     password: data.password,
  //     avatar: image,
  //     status: 1,
  //     address: data.address,
  //     created_date: data.created_date,
  //   };
  //   console.log(resultData);
  //   const result = await addRole(resultData);
  //   Notiflix.Block.remove('#root');
  //   if (result === 200) {
  //     SuccessToast('Create staff successfully', 3000);
  //     props.backToRoleList([
  //       {
  //         key: 'created_at',
  //         value: 'desc',
  //       },
  //     ]);
  //     backtoManageRole();
  //   } else if (result === 404) {
  //     ErrorToast('Create staff unsuccessfully', 3000);
  //     Notiflix.Block.remove('#root');
  //   } else if (result === 401) {
  //     Notiflix.Block.remove('#root');
  //     handleSetUnthorization();
  //   } else if (result === 402) ErrorToast('Email or phone numbers have existed!', 3000);
  //   else {
  //     Notiflix.Block.remove('#root');
  //     ErrorToast('Something went wrong. Please try again', 4000);
  //   }
   };

  const handleSetUnthorization = () => {
    dispatch(setExpiredToken(true));
    const token = getCookies('token');
    // dispatch(setIsLogin(false));
    dispatch(setExpiredToken(true));
    if (token) {
      deleteCookie('token');
    }
  };

  return (
    <div className=" edit_form d-flex justify-content-center">
      <Form className="font_add_edit_prduct" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">

            <Form.Group className="mb-3">
              <Form.Label className="label-input">Name Role </Form.Label>
              <Controller
                control={control}
                name="fisrt_name"
                defaultValue=""
                {...register('first_name', { required: true })}
                ref={null}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Form.Control
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    isInvalid={errors.fisrt_name}
                    placeholder="Enter role name"
                  />
                )}
              />
              <div className="d-flex justify-content-between">
                <small className="text-red font-weight-semi">{errors?.first_name?.message}</small>
              </div>
            </Form.Group>
            <Form.Group>
              <Controller
                control={control}
                name="check_box-1"

                defaultValue=""
                {...register('check-box-1', { required: true })}
                ref={null}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Form.Control
                    onChange={onChange}
                    value={value}
                    type="checkbox"
                    ref={ref}
                //    isInvalid={errors.fisrt_name}
                    placeholder="Enter role name"
                    className="slider round"
                  />
                )}
              />
              <label className="switch">
                <input  name='check-1'/>
                  <span ></span>
              </label>
            </Form.Group>







        <div className="d-flex justify-content-end p-2 mt-3">
          <Button
            id="product-save-btn"
            variant="danger"
            type="submit"
            className="font-weight-bold me-3"

          >
            Save
          </Button>
          <Button
            id="product-save-cancel"
            onClick={() => backtoManageRole()}
            variant="outline-secondary"
            className="font-weight-bold"
          >
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

RoleAdd.propTypes = {
  backToRoleList: PropTypes.func.isRequired,
};

export default RoleAdd;
