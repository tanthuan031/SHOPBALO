import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './product/product.reducer';

const rootReducer = combineReducers({
  product: productReducer,
});
export default rootReducer;
