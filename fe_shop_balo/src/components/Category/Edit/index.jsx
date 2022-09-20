import { yupResolver } from "@hookform/resolvers/yup";
import Notiflix from "notiflix";
import { Button, Form } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Select from 'react-select';
import { addSchemaCategory } from "../../../adapter/category";
import { updateCategory } from "../../../api/Category/categoryAPI";
import { setCategory, setIsAdd, setIsEdit } from "../../../redux/reducer/category/category.reducer";
import { isCategorySelector } from "../../../redux/selectors/category/category.selector";
import { ErrorToast, SuccessToast } from "../../Layouts/Alerts";
import { BlockUI } from "../../Layouts/Notiflix";


function EditCategory(props) {
    const dispatch = useDispatch()
    const categorySelector = useSelector(isCategorySelector);
    const category = [];
    const {
        register,
        setValue,
        handleSubmit,
        control,
        formState: { isValid, errors },

    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(addSchemaCategory),
        defaultValues: {
            Category: categorySelector.name,
            parent_id: categorySelector.parent_id,
            image: categorySelector.image,
        },
    });

    props.data.map((item) => {
        category.push({
            value: item.id,
            label: item.name
        })
    });
    const backtoManagerUser = () => {
        dispatch(setIsAdd(false));
        dispatch(setIsEdit(false));
        dispatch(setCategory({}));
    };



    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    const onSubmit = async (data) => {

        if (typeof data.image === typeof 'string') {
            BlockUI('#root', 'fixed');
            const resultData = {
                name: data.Category,
                parent_id: data.parent_id === '' ? 0 : data.parent_id,

            };
            const result = await updateCategory(categorySelector.id, resultData);
            Notiflix.Block.remove('#root');
            if (result === 200) {

                SuccessToast('Update category successfully', 3000);

                backtoManagerUser();
            } else {
                ErrorToast('Something went wrong. Please try again', 3000);
            }
        } else {


            if (data.image.length != 0) {
                BlockUI('#root', 'fixed');
                const image = await toBase64(data.image[0]);
                const resultData = {
                    name: data.Category,
                    parent_id: data.parent_id === '' ? 0 : data.parent_id,
                    image: image
                };
                const result = await updateCategory(categorySelector.id, resultData);
                Notiflix.Block.remove('#root');
                if (result === 200) {

                    SuccessToast('Update category successfully', 3000);

                    backtoManagerUser();
                } else {
                    ErrorToast('Something went wrong. Please try again', 3000);
                }

            } else {
                ErrorToast('Image is invalid', 3000);
            }
        }
    }
    return (<>
        <div className=" edit_form d-flex justify-content-center">
            <Form className="font_add_edit_prduct" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <table align="center" border="0" className="table table-bordered mb-0">
                    <tbody>
                        <tr>
                            <td with="15%">
                                <p className="font-weight-bold">Category Name</p>
                            </td>
                            <td width="85%">
                                <Form.Control id="Category" type="text" maxLength="128" {...register('Category')} />
                                <div className="d-flex justify-content-between">
                                    <small className="text-red font-weight-semi">{errors?.category_name?.message}</small>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td with="30%">
                                <p className="font-weight-bold">Category Parent</p>
                            </td>
                            <td width="70%">
                                <Controller
                                    control={control}
                                    name="parent_id"

                                    render={({ field: { value, onChange } }) => (
                                        <Select
                                            options={category}
                                            onChange={(options) => {
                                                onChange(options?.value);
                                                setValue('parent_id', options.value);
                                            }}
                                            value={category.filter((option) => value === option?.value)}
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
                                        <small className="text-red font-weight-semi">{errors?.image?.message}</small>

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
                        onClick={backtoManagerUser}
                        variant="outline-secondary"
                        className="font-weight-bold"
                    >
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    </>);
}

export default EditCategory;