import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './category/category.reducer';
import productReducer from './product/product.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
});
export default rootReducer;
