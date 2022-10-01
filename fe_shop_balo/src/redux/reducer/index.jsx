import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './category/category.reducer';
import productReducer from './product/product.reducer';
import  staffReducer  from './staff/staff.reducer';
import  customerReducer  from './customer/customer.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  staff:staffReducer,
  category: categoryReducer,
  customer: customerReducer,
});
export default rootReducer;
