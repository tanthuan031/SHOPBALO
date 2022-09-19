import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './product/product.reducer';
import  staffReducer  from './staff/staff.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  staff:staffReducer,
});
export default rootReducer;
