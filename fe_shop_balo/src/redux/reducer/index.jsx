import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './category/category.reducer';
import productReducer from './product/product.reducer';
import promotionReducer from './promotion/promotion.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  promotion: promotionReducer
});
export default rootReducer;
