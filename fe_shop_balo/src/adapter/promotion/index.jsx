import * as yup from 'yup';

export const addSchemaPromotion = yup.object({
  name: yup
    .string()
    .required('Name can not blank')
    .matches(/^[0-9a-zA-Z\s]+$/, 'Name must be a string')
    .max(50)
    .trim(),
  value: yup.number().required('Value can not blank'),
  description: yup.string().max(255, 'Length can not exceed 255 characters'),
});
