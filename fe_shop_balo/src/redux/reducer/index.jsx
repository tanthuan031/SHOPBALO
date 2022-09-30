import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './category/category.reducer';
import productReducer from './product/product.reducer';
import reviewReducer from './review/review.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  review: reviewReducer
});
export default rootReducer;
