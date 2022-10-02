import * as yup from 'yup';

export const addSchemaPromotion = yup.object({
  name: yup
    .string()
    .required('Name can not blank')
    .max(128)
    .trim(),
  value: yup
    .number()    
    .typeError('Value must be a number')
    .default(20)
    .min(10)
    .max(100)
    .required('Value can not blank'),
  description: yup
  .string()
  .max(255, 'Length can not exceed 255 characters')
  .required('Description can not blank'),
});
