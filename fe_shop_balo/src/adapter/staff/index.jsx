import * as yup from 'yup';
const today = new Date();
today.setHours(0, 0, 0, 0)
export const addSchema = yup.object({
  first_name: yup.string().required('Please, First name can not blank').max(50).trim(),
  last_name: yup.string().required('Please, Last name can not blank').max(50).trim(),
  phone: yup
    .string()
    .required(' Phone can not blank')
    .matches(/^0[3|7|8|9|5]\d{7,8}$/, 'Phonenumber is invalid'),
  email: yup
    .string()
    .required(' Email can not blank')
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email is invalid'),
  address: yup.string().required('Please, Address can not blank').max(250).trim(),
  password: yup.string().required('Please, Password can not blank')
    .max(20,'Password  must be at most 20 characters'),
  created_date: yup.date().min(today, `Created date must be later than ${today.toLocaleString()}`).required('Please type a date'),
  role_id: yup.object().required('Please! Choose a role'),
  gender: yup.object().required('Please !Choose a gender'),
});
export const editSchema = yup.object({
  first_name: yup.string().required('Please, First name can not blank').max(50).trim(),
  last_name: yup.string().required('Please, Last name can not blank').max(50).trim(),
  phone: yup
    .string()
    .required(' Phone can not blank')
    .matches(/^0[3|7|8|9|5]\d{7,8}$/, 'Phonenumber is invalid'),
  email: yup
    .string()
    .required(' Email can not blank')
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email is invalid'),
  address: yup.string().required('Please, Address can not blank').max(250).trim(),
  created_date: yup.date().required('Please type a date'),
  role_id: yup.object().required('Please! Choose a role'),
  gender: yup.object().required('Please !Choose a gender'),
});
