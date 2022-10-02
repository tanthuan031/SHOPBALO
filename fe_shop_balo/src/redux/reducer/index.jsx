import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './category/category.reducer';
import productReducer from './product/product.reducer';
import  customerReducer  from './customer/customer.reducer';
import promotionReducer from './promotion/promotion.reducer';
import staffReducer from './staff/staff.reducer';
import reviewReducer from './review/review.reducer';


const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  customer: customerReducer,
  promotion: promotionReducer,
  staff: staffReducer,
  review: reviewReducer,

});
export default rootReducer;
