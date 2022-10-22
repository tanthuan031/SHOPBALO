import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './category/category.reducer';
import orderReducer from './order/order.reducer';
import productReducer from './product/product.reducer';
import customerReducer from './customer/customer.reducer';
import promotionReducer from './promotion/promotion.reducer';
import staffReducer from './staff/staff.reducer';
import reviewReducer from './review/review.reducer';
import authReducer from './auth/auth.reducer';
import sliderReducer from './slider/slider.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  customer: customerReducer,
  order: orderReducer,
  promotion: promotionReducer,
  staff: staffReducer,
  review: reviewReducer,
  auth: authReducer,
  slider: sliderReducer,
});
export default rootReducer;
