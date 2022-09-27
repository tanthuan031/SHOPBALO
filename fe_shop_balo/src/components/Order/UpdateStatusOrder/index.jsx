import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Notiflix from 'notiflix';

import { Button, Form } from 'react-bootstrap';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { FaTimesCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { addSchema } from '../../../adapter/product';
import { addProduct } from '../../../api/Product/productAPI';
import { setIsEdit } from '../../../redux/reducer/order/order.reducer';
import { setIsAdd } from '../../../redux/reducer/product/product.reducer';
import { isIdEditStatusOrderSelector } from '../../../redux/selectors/order/order.selector';
import { ErrorToast, SuccessToast } from '../../Layouts/Alerts';
import CustomEditor from '../../Layouts/Edittor';
import { BlockUI } from '../../Layouts/Notiflix';
// import './style.css';
function UpdateStatusOrder(props) {
  const idStatusUpdate = useSelector(isIdEditStatusOrderSelector);
  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(addSchema),
    defaultValues: {
      status_order: idStatusUpdate,
    },
  });
  const dispatch = useDispatch();
  /* Status: 1. Cho xac nhan 2.Xac nhan 3.Dang giao hang 4.Giao hang thanh cong 5. Giao hang that bai  6. Da hoan thanh 7 that bai */

  const typeOptionsStatusOrder = [
    { value: 1, label: 'Wait for confirmation... ' },
    { value: 2, label: 'Confirm' },
    { value: 3, label: 'Delivery' },
    { value: 4, label: 'Successfully delivery' },
    { value: 5, label: ' Delivery failed' },
    { value: 6, label: 'Successfully' },
    { value: 7, label: 'Failed' },
  ];

  const onSubmit = async (data) => {
    BlockUI('#root', 'fixed');
  };
  const backtoProduct = () => {
    dispatch(setIsEdit(false));
  };

  return (
    <>
      <div className=" edit_form d-flex justify-content-center">
        <Form className="font_add_edit_prduct" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <table align="center" border="0" className="table table-bordered mb-0">
            <tbody>
              <tr>
                <td with="30%">
                  <p className="font-weight-bold">Status order</p>
                </td>
                <td width="70%">
                  <Controller
                    control={control}
                    name="status_order"
                    {...register('status_order')}
                    ref={null}
                    render={({ field: { value, onChange } }) => (
                      <Select
                        options={typeOptionsStatusOrder}
                        onChange={(options) => {
                          onChange(options?.value);
                          setValue('status_order', options.value);
                        }}
                        value={typeOptionsStatusOrder.filter((option) => value === option?.value)}
                        placeholder="Select..."
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary25: '#f9d2e4',
                            primary50: '#f9d2e4',
                            primary: '#d6001c',
                          },
                        })}
                      />
                    )}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-end p-2 mt-3">
            <Button
              id="product-save-btn"
              variant="danger"
              type="submit"
              className="font-weight-bold me-3"
              disabled={!isValid}
            >
              Save
            </Button>
            <Button
              id="product-save-cancel"
              onClick={() => backtoProduct()}
              variant="outline-secondary"
              className="font-weight-bold"
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default UpdateStatusOrder;
