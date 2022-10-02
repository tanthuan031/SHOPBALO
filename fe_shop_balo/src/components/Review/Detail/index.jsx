import { Button, Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import CustomEditor from './../../Layouts/Edittor/index';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { setIsEdit } from '../../../redux/reducer/review/review.reducer';
import { isSelectorReview } from './../../../redux/selectors/review/review.selector';
import { FaStar } from 'react-icons/fa';
import { URL_SERVER } from './../../../utils/urlPath';

const ReviewDetail = () => {
  const dispatch = useDispatch();
  const reviewSelector = useSelector(isSelectorReview);
  const reviewData = { ...reviewSelector };

  const backToManage = () => {
    dispatch(setIsEdit(false));
  };

  return (
    <>
      <div className="mt-2 p-4 detail-review container w-75 rounded">
        <div className="d-flex gap-3 justify-content-between">
          <div className="d-flex gap-3 align-items-center">
            <img className="img-avatar " src={`${URL_SERVER}/storage/customer/${reviewData.customers.image} `} />
            <h1 className="fs-5 fw-bold">{`${reviewData.customers.last_name} ${reviewData.customers.first_name}`}</h1>
          </div>
          <span className="d-flex justify-self-end">
            <p
              className={`text-center border-radius-2px ${
                reviewData.status === 'pending' ? 'bg-warning-100 text-warning p-2' : 'bg-success-100 text-success p-2'
              }`}
            >
              {reviewData.status === 'pending' ? 'pending' : 'pushlised'}
            </p>
          </span>
        </div>
        <hr class="border border-1 opacity-50"></hr>
        <h2 className="mt-2 fs-5 fw-bold">General Information</h2>
        <div className="d-flex flex-column">
          <div className="d-flex">
            <div className="w-50">
              <h5 className="fs-6 text-secondary mt-4 mb-1">Email</h5>
              <p>{reviewData.customers.email}</p>
            </div>
            <div className="flex-shrink-0">
              <h5 className="fs-6 text-secondary mt-4 mb-1">Phone</h5>
              <p>{reviewData.customers.phone}</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="w-50">
              <h5 className="fs-6 text-secondary mt-4 mb-1">Address</h5>
              <p>{reviewData.customers.address}</p>
            </div>
            <div className="flex-shrink-0">
              <h5 className="fs-6 text-secondary mt-4 mb-1">Gender</h5>
              <p>{reviewData.customers.gender}</p>
            </div>
          </div>
        </div>
        <h2 className="mt-5 fs-5 fw-bold mb-4">
          Comment about #{reviewData.products.id} - {reviewData.products.name}
        </h2>
        <div className="d-flex flex-column gap-3">
          <span className="d-flex">
            {Array.from(Array(reviewData.point), (e, i) => {
              return <FaStar className="text-danger" />;
            })}
          </span>
          <span className="text-secondary" style={{ fontSize: '13px' }}>
            {reviewData.created_date}
          </span>
          <p className="fs-6 text-secondary">Content</p>
          <p>{reviewData.content}</p>
          <img style={{ width: '150px', height: '150px' }} src={`${reviewData.image} `} />
        </div>
        <div className="d-flex justify-content-end">
          <Button
            id="product-save-cancel"
            onClick={backToManage}
            variant="outline-secondary"
            className="font-weight-bold"
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

export default ReviewDetail;
