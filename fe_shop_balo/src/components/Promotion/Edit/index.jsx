import { Button, Form } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAdd, setIsEdit, setPromotion } from '../../../redux/reducer/promotion/promotion.reducer';
import { BlockUI } from '../../Layouts/Notiflix';
import { ErrorToast, SuccessToast } from '../../Layouts/Alerts';
import Notiflix from 'notiflix';
import CustomEditor from './../../Layouts/Edittor/index';
import { addSchemaPromotion } from '../../../adapter/promotion';
import { addDiscount, editDiscount } from '../../../api/Promotion/promotionAPI';
import { useEffect } from 'react';
import { FaRegRegistered } from 'react-icons/fa';
import { isPromotionSelector } from '../../../redux/selectors/promotion/promotion.selector';

function PromotionEdit(props) {
  const dispatch = useDispatch();
  const promotionSelect = useSelector(isPromotionSelector);
  const promotion = [];

  const typeOptionsStatus = [
    { value: '0', label: 'Active' },
    { value: '1', label: 'Inactive' },
  ];

  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(addSchemaPromotion),
    defaultValues: {
      name: promotionSelect.name,
      value: promotionSelect.value,
      status: promotionSelect.status,
      description: promotionSelect.description,
    },
  });

  const backtoPromotionList = () => {
    dispatch(setIsAdd(false));
    dispatch(setIsEdit(false));
    dispatch(setPromotion({}))
  };

  const onSubmit = async (data) => {
    BlockUI('#root', 'fixed');
    if (data.name.length != 0) {
      const resultData = {
        name: data.name,
        value: data.value,
        status: data.status,
        description: data.description,
      };

      const result = await editDiscount(promotionSelect.id, resultData);

      Notiflix.Block.remove('#root');
      if (result.status === 200) {
        SuccessToast('Create a item promotion successfully', 3000);
        backtoPromotionList();
      } else {
        ErrorToast('Something went wrong. Please try again', 3000);
      }
    }
  };

  const editorDescription = (value) => {
    setValue('description', value);
  };

  const TableRow = (props) => {
    return (
      <tr>
        <td with="30%">
          <p className="font-weight-bold">{props.children}</p>
        </td>
        <td width="70%">{props.control}</td>
      </tr>
    );
  };

  return (
    <>
      <div className=" edit_form d-flex justify-content-center">
        <Form className="font_add_edit_prduct" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <table align="center" border="0" className="table table-bordered mb-0">
            <tbody>
              <TableRow
                control={
                  <>
                    <Form.Control id="name" type="text" maxLength="128" {...register('name')} />
                    <div className="d-flex justify-content-between">
                      <small className="text-red font-weight-semi">{errors?.name?.message}</small>
                    </div>
                  </>
                }
              >
                Name
              </TableRow>

              <TableRow
                control={
                  <>
                    <Form.Control id="value" type="text" maxLength="128" {...register('value')} />
                    <div className="d-flex justify-content-between">
                      <small className="text-red font-weight-semi">{errors?.value?.message}</small>
                    </div>
                  </>
                }
              >
                Value
              </TableRow>

              <TableRow
                control={
                  <Controller
                    control={control}
                    name="status"
                    render={({ field: { value, onChange } }) => (
                      <Select
                        options={typeOptionsStatus}
                        onChange={(options) => {
                          onChange(options?.value);
                          if (options?.value === 1) {
                            setValue('status', options.value);
                          }
                        }}
                        value={typeOptionsStatus?.filter((option) => value === option?.value)}
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
                }
              >
                Status
              </TableRow>

              <TableRow
                control={
                  <>
                    <CustomEditor id="description" editorDescription={editorDescription} {...register('description')} />
                    <div className="ckeditor-wrapper" />
                    <div className="d-flex justify-content-between">
                      <small className="text-red font-weight-semi">
                        {errors.description && 'Description can not blank'}
                      </small>
                    </div>
                  </>
                }
              >
                Description
              </TableRow>
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
              onClick={backtoPromotionList}
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

export default PromotionEdit;
