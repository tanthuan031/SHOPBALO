import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './category/category.reducer';
import orderReducer from './order/order.reducer';
import productReducer from './product/product.reducer';
import  staffReducer  from './staff/staff.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  staff:staffReducer,
  category: categoryReducer,
  order: orderReducer,
});
export default rootReducer;
