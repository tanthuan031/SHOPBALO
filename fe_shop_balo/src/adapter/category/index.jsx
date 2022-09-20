import * as yup from 'yup';

export const addSchemaCategory = yup.object({
    category_name: yup
        .string()
        .required('Please, Category name can not blank')
        .max(50)
        .trim(),

    // image: yup.ObjectSchema().required('Image is required'),

});
