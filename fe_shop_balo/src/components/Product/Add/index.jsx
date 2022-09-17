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
import { useState } from 'react';
import { addProduct } from '../../../api/Product/productAPI';
import { ErrorToast, SuccessToast } from '../../Layouts/Alerts';
import Notiflix from 'notiflix';
import { BlockUI } from '../../Layouts/Notiflix';
import { FaTimesCircle } from 'react-icons/fa';
function ProductAdd(props) {
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
      category_id: '',
      color: '',
      image: '',
      image_slide: '',
      amount: '',
      price: '',
      description: '',
    },
  });
  const [fileImageSlide, setFileImageSlide] = useState({
    file: [],
  });
  const [fileImageSlideShow, setFileImageSlideShow] = useState({
    file: [],
  });
  const dispatch = useDispatch();
  useEffect(() => {
    register('description', { required: true });
    register('image_slide');
    setValue('image_slide', fileImageSlide);
    register('category_id');
    register('color');
  }, [register, fileImageSlide]);

  const product_name = useWatch({
    control,
    name: 'product_name',
  });
  const category_id = useWatch({
    control,
    name: 'category_id',
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
  const image = useWatch({
    control,
    name: 'image',
  });
  const image_slide = useWatch({
    control,
    name: 'image_slide',
  });
  const typeOptionsCategory = [
    { value: '1', label: 'Category1' },
    { value: '2', label: 'Category 2' },
  ];

  const typeOptionsColor = [
    { value: '1', label: 'Green' },
    { value: '2', label: 'Blue' },
  ];

  const editorDescription = (value) => {
    setValue('description', value);
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
    if (data.image.length != 0 && data.description != '') {
      const image1 = await toBase64(data.image[0]);
      const image_slide_array = [];
      for (let i = 0; i < data.image_slide.file.length; i++) {
        image_slide_array.push(await toBase64(data.image_slide.file[i]));
      }
      const resultData = {
        amount: data.amount,
        category_id: data.category_id,
        code_color: data.color,
        description: data.description,
        image: [image1],
        image_slide: image_slide_array,
        price: data.price,
        name: data.product_name,
      };
      const result = await addProduct(resultData);
      Notiflix.Block.remove('#root');
      if (result === 200) {
        SuccessToast('Create product successfully', 3000);
        props.backToProductList([
          {
            key: 'updated_at',
            value: 'desc',
          },
        ]);
        backtoManagerUser();
      } else if (result === 404) {
        ErrorToast('Create product unsuccessfully', 3000);
        Notiflix.Block.remove('#root');
      } else if (result === 401) {
        Notiflix.Block.remove('#root');
      } else {
        Notiflix.Block.remove('#root');
        ErrorToast('Something went wrong. Please try again', 3000);
      }
    } else {
      ErrorToast('Please, Image or Description can not blank', 3000);
    }
  };
  const backtoManagerUser = () => {
    dispatch(setIsAdd(false));
  };
  const uploadImageSlide = (e) => {
    if (e.target.files.length > 0) {
      setFileImageSlide({ file: [...fileImageSlide.file, e.target.files[0]] });
      setFileImageSlideShow({ file: [...fileImageSlideShow.file, URL.createObjectURL(e.target.files[0])] });
    }
  };
  const onRemoveImage = (id) => {
    image_slide.file.forEach((value, index) => {
      if (index == id) {
        image_slide.file.splice(index, 1);
      }
    });
    setValue('image_slide', image_slide);
    fileImageSlideShow.file.splice(id, 1);
  };
  return (
    <>
      <div className=" edit_form d-flex justify-content-center">
        <Form className="font_add_edit_prduct" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
                    name="category_id"
                    // {...register('category_name')}
                    render={({ field: { value, onChange } }) => (
                      <Select
                        options={typeOptionsCategory}
                        onChange={(options) => {
                          onChange(options?.value);
                          setValue('category_id', options.value);
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
                    render={({ field: { value, onChange } }) => (
                      <Select
                        options={typeOptionsColor}
                        onChange={(options) => {
                          onChange(options.value);
                          setValue('color', options.value);
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
                  <p className="font-weight-bold">Image</p>
                </td>
                <td width="70%">
                  <Form.Control id="image" type="file" {...register('image')} />
                  <div className="d-flex justify-content-between">
                    <small className="text-red font-weight-semi">
                      {/* {errors.image?.message || image.length === 0 ? 'Image can not blank' : ''} */}
                    </small>
                  </div>
                </td>
              </tr>

              <tr>
                <td with="30%">
                  <p className="font-weight-bold">Image Slide</p>
                </td>
                <td width="70%">
                  <Form.Control id="image-slide" type="file" multiple onChange={uploadImageSlide} />

                  <div className="image-product-slide">
                    {fileImageSlideShow.file != [] &&
                      fileImageSlideShow.file.map((url, index) => (
                        <div key={index} className="image-product-slide-item">
                          <img className="multi-preview-slide-product " src={url} alt="..." />
                          {/* <Button onClick={() => onRemoveImage(index)} id={index} value={index} /> */}
                          <FaTimesCircle onClick={() => onRemoveImage(index)} className="btn-delete-product-slide" />
                        </div>
                      ))}
                  </div>
                  <div className="d-flex justify-content-between">
                    <small className="text-red font-weight-semi">{errors.image_slide?.message}</small>
                  </div>
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
                    <small className="text-red font-weight-semi">
                      {errors.description && 'Description can not blank'}
                    </small>
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

export default ProductAdd;
