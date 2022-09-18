import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm, useWatch } from 'react-hook-form';
import Select from 'react-select';
import { addSchema } from '../../../adapter/product';
import CustomEditor from '../../Layouts/Edittor';
import './style.css';
import { setIsAdd } from '../../../redux/reducer/product/product.reducer';
function ProductEdit(props) {
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
      product_name: '',
      category_name: '',
      color: '',
      amount: '',
      price: '',
      description: '',
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    register('description', { required: true });
  }, [register]);
  const product_name = useWatch({
    control,
    name: 'product_name',
  });
  const category_name = useWatch({
    control,
    name: 'category_name',
  });
  const color = useWatch({
    control,
    name: 'color',
  });
  const amount = useWatch({
    control,
    name: 'amount',
  });
  const price = useWatch({
    control,
    name: 'price',
  });
  const description = useWatch({
    control,
    name: 'description',
  });
  console.log('fe', price);
  console.log('description', description);
  console.log(errors);
  const typeOptionsCategory = [
    { value: '1', label: 'Category1' },
    { value: '2', label: 'Category 2' },
  ];

  const typeOptionsColor = [
    { value: '1', label: 'Green' },
    { value: '2', label: 'Blue' },
  ];
  // console.log(product_name.length);
  // console.log(errors?.product_name?.message);
  console.log('fe1', isValid);

  const editorDescription = (value) => {
    // console.log(a);
    setValue('description', value);
  };

  const onSubmit = async (data) => {
    // BlockUI('#root', 'fixed');
    // if (data.date_of_birth) data.date_of_birth = formatDate(data.date_of_birth, 'YYYY-MM-DD');
    // if (data.joined_date) data.joined_date = formatDate(data.joined_date, 'YYYY-MM-DD');
    // const result = await addUser(data);
    // if (result === 200) {
    //   SuccessToast('Create user successfully', 3000);
    //   props.backToManageUser('created_at', 'create');
    // } else if (result === 404) {
    //   ErrorToast('Create user unsuccessfully', 3000);
    //   Notiflix.Block.remove('#root');
    // } else if (result === 401) {
    //   Notiflix.Block.remove('#root');
    //   dispatch(setExpiredToken(true));
    //   localStorage.removeItem('token');
    // } else {
    //   Notiflix.Block.remove('#root');
    //   ErrorToast('Something went wrong. Please try again', 3000);
    // }
  };
  const backtoManagerUser = () => {
    dispatch(setIsAdd(false));
  };
  return (
    <>
      <div className=" edit_form d-flex justify-content-center">
        <Form className="font_add_edit_prduct" onSubmit={handleSubmit(onSubmit)}>
          <table align="center" border="0" className="table table-bordered mb-0">
            <tbody>
              <tr>
                <td with="15%">
                  <p className="font-weight-bold">Product Name</p>
                </td>
                <td width="85%">
                  <Form.Control id="product_name" type="text" maxLength="128" {...register('product_name')} />
                  <div className="d-flex justify-content-between">
                    <small className="text-red font-weight-semi">{errors?.product_name?.message}</small>
                  </div>
                </td>
              </tr>

              <tr>
                <td with="30%">
                  <p className="font-weight-bold">Category Name</p>
                </td>
                <td width="70%">
                  <Controller
                    control={control}
                    name="category_name"
                    {...register('category_name')}
                    render={({ field: { value, onChange } }) => (
                      <Select
                        options={typeOptionsCategory}
                        onChange={(options) => {
                          onChange(options?.value);
                          // setValue(options.value);
                        }}
                        value={typeOptionsCategory.filter((option) => value === option?.value)}
                        placeholder=""
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

              <tr>
                <td with="30%">
                  <p className="font-weight-bold">Color</p>
                </td>
                <td width="70%">
                  <Controller
                    control={control}
                    name="color"
                    {...register('color')}
                    render={({ field: { value, onChange } }) => (
                      <Select
                        options={typeOptionsColor}
                        onChange={(options) => {
                          onChange(options.value);
                          // setValue(options.value);
                        }}
                        value={typeOptionsColor.filter((option) => value === option.value)}
                        placeholder=""
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

              <tr>
                <td with="30%">
                  <p className="font-weight-bold">Amount</p>
                </td>
                <td width="70%">
                  <Form.Control id="amount" type="number" maxLength="128" {...register('amount')} />
                  <div className="d-flex justify-content-between">
                    <small className="text-red font-weight-semi">{errors.amount?.message}</small>
                  </div>
                </td>
              </tr>

              <tr>
                <td with="30%">
                  <p className="font-weight-bold">Price</p>
                </td>
                <td width="70%">
                  <Form.Control id="price" type="number" maxLength="128" {...register('price')} />
                  <div className="d-flex justify-content-between">
                    <small className="text-red font-weight-semi">{errors.price?.message}</small>
                  </div>
                </td>
              </tr>
              <tr>
                <td with="30%">
                  <p className="font-weight-bold">Description</p>
                </td>
                <td width="70%">
                  <CustomEditor id="description" editorDescription={editorDescription} />
                  <div className="ckeditor-wrapper" />

                  <div className="d-flex justify-content-between">
                    <small className="text-red font-weight-semi">{errors?.description?.message}</small>
                  </div>
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
              onClick={() => backtoManagerUser()}
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

export default ProductEdit;
