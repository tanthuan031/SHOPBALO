import * as yup from 'yup';

export const addSchema = yup.object({
  first_name: yup
    .string()
    .required('Please, First name can not blank')
    .max(50)
    .trim(),
  last_name: yup
    .string()
    .required('Please, Last name can not blank')
    .max(50)
    .trim(),
  phone: yup
    .string()
    .required(' Phone can not blank')
    .matches(/^0[3|7|8|9|5]\d{7,8}$/, 'Phonenumber is invalid'),
  email: yup
    .string()
    .required(' Email can not blank')
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email is invalid'),
  address: yup
    .string()
    .required('Please, Address can not blank')
    .max(250)
    .trim(),
  password: yup
    .string()
    .required('Please, Password can not blank')
    .max(50),
  created_date: yup.date().required('Please type a date'),
  role_id: yup.object().required('Please! Choose a role'),
  gender: yup.object().required('Please !Choose a gender')
  //avatar: yup.ObjectSchema().required('Image can not blank')
  // image_slide: yup.string().required('Image Slide can not blank'),
  // description: yup.string().required('Image Slide can not blank'),
});
export const editSchema = yup.object({
  name: yup.string().required('Please, Product name can not blank').max(50).trim(),
  amount: yup
    .string()
    .required(' Amount can not blank')
    .matches(/^[0-9]+$/, 'Amount can not number'),
  price: yup
    .string()
    .required('Price can not blank')
    .matches(/^[0-9]+$/, 'Price can not number'),
  // image: yup.ObjectSchema().required('Image can not blank'),
  // image_slide: yup.string().required('Image Slide can not blank'),
  // description: yup.string().required('Image Slide can not blank'),
});
