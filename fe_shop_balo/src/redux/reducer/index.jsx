import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './category/category.reducer';
import productReducer from './product/product.reducer';
import promotionReducer from './promotion/promotion.reducer';
import  staffReducer  from './staff/staff.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  staff:staffReducer,
  category: categoryReducer,
  promotion: promotionReducer
});
export default rootReducer;
