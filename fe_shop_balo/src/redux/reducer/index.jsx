import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './category/category.reducer';
import orderReducer from './order/order.reducer';
import productReducer from './product/product.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  order: orderReducer,
});
export default rootReducer;
