import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './category/category.reducer';
import productReducer from './product/product.reducer';
import promotionReducer from './promotion/promotion.reducer';
import staffReducer from './staff/staff.reducer';
import reviewReducer from './review/review.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  promotion: promotionReducer,
  review: reviewReducer,
});
export default rootReducer;
