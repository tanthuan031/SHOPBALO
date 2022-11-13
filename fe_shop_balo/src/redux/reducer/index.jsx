import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './category/category.reducer';
import orderReducer from './order/order.reducer';
import productReducer from './product/product.reducer';
import customerReducer from './customer/customer.reducer';
import promotionReducer from './promotion/promotion.reducer';
import staffReducer from './staff/staff.reducer';
import reviewReducer from './review/review.reducer';
import authReducer from './auth/auth.reducer';
import sliderReducer from './slider/slider.reducer';
import profileReducer from './profile/profile.reducer';
import cartReducer from './cart/cart.reducer';
import homeClientReducer from './home/home.reducer';
import shopClientReducer from './shop/shop.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  customer: customerReducer,
  order: orderReducer,
  promotion: promotionReducer,
  staff: staffReducer,
  review: reviewReducer,
  auth: authReducer,
  slider: sliderReducer,
  profile: profileReducer,
  cart: cartReducer,
  homeClient: homeClientReducer,
  shopClient: shopClientReducer,
});

export default rootReducer;
