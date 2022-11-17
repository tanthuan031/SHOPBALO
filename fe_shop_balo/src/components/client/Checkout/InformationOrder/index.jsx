import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Controller, useForm, useWatch } from 'react-hook-form';
import Select from 'react-select';
import { getAllCities, getAllDictrists, getAllWards } from '../../../../api/Cities';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCookieClient, getCookiesClient, handleGetInformationClient } from '../../../../api/Client/Auth/authAPI';
import { FaEye } from 'react-icons/fa';
import iconVNPAY from '../../../../utils/logo-vnpay.png';
import iconMOMO from '../../../../utils/logo-momo.png';
import iconVISA from '../../../../utils/logo-visa.png';
import iconDELIVERY from '../../../../utils/logo-deliver.png';
import './style.css';
import { formatter } from '../../../../utils/formatCurrency';
import { getAllDiscountQueryPoint } from '../../../../api/Client/Discount';
export default function FormInfomationCheckout(props) {
  const [cities, setCities] = useState([]);
  const [distrists, setDistricts] = useState();
  const [listDiscount, setListDiscount] = useState([]);
  const [wards, setWards] = useState();
  const handleGetCities = async () => {
    const formatDataCities = [];
    const data = await getAllCities();
    data.data.map((item, index) => {
      formatDataCities.push({
        value: item.id,
        label: item.name,
      });
    });
    setCities(formatDataCities);
  };
  const handleGetDistrict = async (id) => {
    const formatDataDistricts = [];
    const data = await getAllDictrists(id);
    data.data.map((item, index) => {
      formatDataDistricts.push({
        value: item.id,
        label: item.name,
      });
    });
    setDistricts(formatDataDistricts);
  };
  const handleGetWards = async (id) => {
    const data = await getAllWards(id);
    const formatDataWard = [];
    data.data.map((item, index) => {
      formatDataWard.push({
        value: item.id,
        label: item.name,
      });
    });
    setWards(formatDataWard);
  };
  const handleGetDiscount = async () => {
    const point = props.dataProfile.point;
    const result = await getAllDiscountQueryPoint({
      filterPoint: point,
    });
    if (result === 401) {
      handleSetUnthorization();
      window.location.href = '/login';
      return false;
    } else if (result === 500) {
      return false;
    } else {
      setListDiscount(result);
    }
    // setLoading(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    handleGetCities();
    handleGetDiscount();
  }, [dispatch]);
  console.log('dj', listDiscount);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors, isDirty, dirtyFields },
  } = useForm({
    mode: 'onChange',
    // resolver: yupResolver(editSchema),
    defaultValues: {
      first_name: props.dataProfile.first_name,
      last_name: props.dataProfile.last_name,
      phone: props.dataProfile.phone,
      email: props.dataProfile.email,
      paymentMethod: '',
    },
  });

  const city = useWatch({
    control,
    name: 'cities',
  });
  const district = useWatch({
    control,
    name: 'district',
  });
  const paymentMethod = [
    {
      value: '1',
      label: 'Payment on delivery',
    },
  ];

  //   const dispatch = useDispatch();

  //   const onSubmit = async (data) => {
  //     BlockUICLIENT('#root', 'fixed');
  //     const temDirtyFields = { ...dirtyFields };
  //     Object.keys(temDirtyFields).map((key) => {
  //       if (key === 'gender') temDirtyFields[key] = data[key].label;
  //       else temDirtyFields[key] = data[key];
  //     });
  //     // console.log('dataBefore:', temDirtyFields);
  //     if (temDirtyFields.avatar !== undefined) {
  //       const image = await toBase64(temDirtyFields.avatar);
  //       temDirtyFields.avatar = [image];
  //     }
  //     const result = await editProfile(props.dataProfile.id, temDirtyFields);
  //     Notiflix.Block.remove('#root');
  //     if (result === 200) {
  //       SuccessToast('Update customer successfully', 5000);
  //       props.backProfile();
  //       backtoManageCustomer();
  //     } else if (result === 404) {
  //       ErrorToast('Update customers unsuccessfully', 3000);
  //       Notiflix.Block.remove('#root');
  //     } else if (result === 401) {
  //       // handleSetUnthorization();
  //       Notiflix.Block.remove('#root');
  //     } else if (result === 402) ErrorToast('Email or phone numbers have existed!', 3000);
  //     else {
  //       Notiflix.Block.remove('#root');
  //       ErrorToast('Something went wrong. Please try again', 3000);
  //     }
  //   };

  // const handleSetUnthorization = () => {
  //   dispatch(setExpiredToken(true));
  //   const token = getCookies('token');
  //   // dispatch(setIsLogin(false));
  //   dispatch(setExpiredToken(true));
  //   if (token) {
  //     deleteCookie('token');
  //   }
  // };
  const handleSetUnthorization = () => {
    const token = getCookiesClient('tokenClient');
    if (token) {
      deleteCookieClient('tokenClient');
    }
  };
  return (
    <div className="edit_form d-flex justify-content-center">
      <Form className="font_checkout text-black" encType="multipart/form-data">
        <div className="row">
          <div className="col-md-7">
            <h4 className="text-center font-weight-bold mb-3 text-black">Shipment Details</h4>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="label-input">
                    First Name &nbsp;<span className="text-danger">*</span>
                  </Form.Label>
                  <Controller
                    control={control}
                    name="first_name"
                    defaultValue=""
                    {...register('first_name', { required: true })}
                    ref={null}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <div className="d-flex icon-edit-checkout">
                        <Form.Control
                          onChange={onChange}
                          value={value}
                          ref={ref}
                          isInvalid={errors.first_name}
                          placeholder="Enter fisrt_name"
                        />
                        <FaEye />
                      </div>
                    )}
                  />
                  <div className="d-flex justify-content-between">
                    <small className="text-red font-weight-semi">{errors?.first_name?.message}</small>
                  </div>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="label-input">Last Name</Form.Label>
                  <Controller
                    control={control}
                    name="last_name"
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Form.Control
                        onChange={onChange}
                        value={value}
                        ref={ref}
                        isInvalid={errors.last_name}
                        placeholder="Enter last_name"
                        {...register('last_name', { required: true })}
                      />
                    )}
                  />
                  <div className="d-flex justify-content-between">
                    <small className="text-red font-weight-semi">{errors?.last_name?.message}</small>
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="label-input">Phone</Form.Label>
                  <Controller
                    control={control}
                    name="phone"
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Form.Control
                        onChange={onChange}
                        value={value}
                        ref={ref}
                        isInvalid={errors.phone}
                        placeholder="Enter phone"
                        {...register('phone', { required: true, pattern: /^0[3|7|8|9|5]\d{7,8}$/ })}
                      />
                    )}
                  />
                  <div className="d-flex justify-content-between">
                    <small className="text-red font-weight-semi">{errors?.phone?.message}</small>
                  </div>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label className="label-input">Email</Form.Label>
                  <Controller
                    control={control}
                    name="email"
                    defaultValue=""
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Form.Control
                        onChange={onChange}
                        value={value}
                        disabled
                        ref={ref}
                        isInvalid={errors.email}
                        placeholder="Enter email"
                        {...register('email', {
                          required: true,
                          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        })}
                      />
                    )}
                  />
                  <div className="d-flex justify-content-between">
                    <small className="text-red font-weight-semi">{errors?.email?.message}</small>
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <div className="col-md-12 ">
                <Form.Group className="mb-2 font-18px">
                  <Form.Label className="label-input">
                    City &nbsp;<span className="text-danger">*</span>
                  </Form.Label>
                  <Controller
                    name="cities"
                    control={control}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Select
                        options={cities}
                        onChange={(options) => {
                          onChange(options?.value);
                          handleGetDistrict(options?.value);
                          setValue('cities', options.value);
                        }}
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary25: '#ffffff',
                            primary50: '##3ca9d5',
                            primary: '#3ca9d5',
                          },
                        })}
                      />
                    )}
                  />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <small className="text-red font-12px">{errors?.cities?.message}</small>
                </div>
              </div>
            </Row>
            <Row>
              <div className="col-md-12 ">
                <Form.Group className="mb-2 font-18px">
                  <Form.Label className="label-input">
                    District &nbsp;<span className="text-danger">*</span>
                  </Form.Label>
                  <Controller
                    name="district"
                    control={control}
                    render={({ field: { onChange, onBlur, value, ref, disabled } }) => (
                      <Select
                        isDisabled={city ? false : true}
                        options={distrists}
                        onChange={(options) => {
                          onChange(options?.value);
                          setValue('district', options.value);
                          handleGetWards(options?.value);
                        }}
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary25: '#ffffff',
                            primary50: '##3ca9d5',
                            primary: '#3ca9d5',
                          },
                        })}
                      />
                    )}
                  />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <small className="text-red font-12px">{errors?.cities?.message}</small>
                </div>
              </div>
            </Row>
            <Row>
              <div className="col-md-12 ">
                <Form.Group className="mb-2 font-18px">
                  <Form.Label className="label-input">
                    Ward &nbsp;<span className="text-danger">*</span>
                  </Form.Label>
                  <Controller
                    name="ward"
                    control={control}
                    render={({ field: { onChange, onBlur, value, ref, disabled } }) => (
                      <Select
                        isDisabled={district ? false : true}
                        options={wards}
                        onChange={(options) => {
                          onChange(options?.value);
                          setValue('ward', options.value);
                        }}
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary25: '#ffffff',
                            primary50: '##3ca9d5',
                            primary: '#3ca9d5',
                          },
                        })}
                      />
                    )}
                  />
                </Form.Group>
                <div className="d-flex justify-content-between">
                  <small className="text-red font-12px">{errors?.cities?.message}</small>
                </div>
              </div>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label className="label-input">Address</Form.Label>
              <Controller
                control={control}
                name="address"
                defaultValue=""
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Form.Control
                    onChange={onChange}
                    value={value}
                    ref={ref}
                    type="address"
                    isInvalid={errors.address}
                    placeholder="Enter address"
                  />
                )}
              />
              <div className="d-flex justify-content-between">
                <small className="text-red font-weight-semi">{errors?.address?.message}</small>
              </div>
            </Form.Group>
          </div>
          <div className="col-md-5 padding-left-48px">
            <div className="mb-3">
              <h4 className="text-center font-weight-bold mb-3 mt-1 text-black">Order Summary</h4>
              <div>
                <div className="font-20px d-flex">
                  <p className="info-invoice-left"> Total price: </p>
                  <p className="">{formatter.format(props.totalCart)}</p>
                </div>
                <div className="font-20px d-flex">
                  <p className="info-invoice-left">Discount:</p>
                  <p className="">10</p>
                </div>
                <div className="font-20px d-flex">
                  <p className="info-invoice-left">Promotions:</p> <p className="">10</p>
                </div>
                <div className="font-20px d-flex">
                  <p className="info-invoice-left">Total Bill:</p> <p className="">10</p>
                </div>
                <div className="font-20px">
                  <p className="info-invoice-left"> Payment methods</p>
                  <div className="d-flex  justify-content-between">
                    <Form.Check
                      // className="info-invoice-left"
                      type="radio"
                      label={<img className="iconIamge" src={iconMOMO} />}
                      name="payment"
                      id="momo"
                      value="Momo"
                      disabled
                    />
                    <Form.Check
                      className="info-invoice-left"
                      type="radio"
                      label={<img className="iconIamge" src={iconVNPAY} />}
                      name="payment"
                      id="vnpay"
                      value="VNPay"
                      disabled
                    />
                  </div>
                  <div className="d-flex justify-content-between ">
                    <Form.Check
                      type="radio"
                      label={<img className="iconIamge" src={iconVISA} />}
                      name="payment"
                      id="visa"
                      value="vnpay"
                      disabled
                    />
                    <Form.Check
                      className="info-invoice-left"
                      type="radio"
                      label={<img className="iconIamge" src={iconDELIVERY} />}
                      name="payment"
                      id="delivery"
                      value="delivery"
                      checked={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center p-2 mt-3">
              <Button
                id="product-save-btn"
                variant="primary"
                type="submit"
                className="font-weight-bold me-3"
                disabled={!isDirty}
              >
                Save
              </Button>
              <Button id="product-save-cancel" variant="outline-secondary" className="font-weight-bold">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
