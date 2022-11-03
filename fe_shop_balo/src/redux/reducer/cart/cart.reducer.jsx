import { createSlice } from '@reduxjs/toolkit';
const dataShop = JSON.parse(localStorage.getItem("cart"));
const yourCart = !!dataShop ? dataShop.cart.cartData : [];
//const initialState = !!yourCart ? yourCart : [];
export const productReducer = createSlice({
  name: 'cart',
  initialState:{
    cartData:!!yourCart ? yourCart : []
  },
  reducers: {
    addProductCart: (state, action) => {
      const inCart = state.cartData.find((item) =>
        item.id === action.payload.id
      );
      return (inCart)
        ?{cartData: state.cartData.map((item) =>
          item.id === action.payload.id
            ?{ ...item, qty: item.qty + 1 }
            : item
        )}
        : {cartData:[...state.cartData, { ...action.payload, qty: 1 }]};
    },
    updateProductCart: (state, action) => {
      const existCart = state.cartData.find((item) =>
        item.id === action.payload.id
      );
      return existCart
        ? {cartData: state.cartData.map((item) =>
          item.id === action.payload.product.id
            ? { ...item, qty: item.qty + action.payload.quantity }
            : item
        )}
        : [
          ...state.cart,
          { ...action.payload.product.id, qty: action.payload.quantity },
        ];
    },
    increaseQuantityCart:(state, action)=>{
    return {cartData: state.cartData.map((item) =>
        +item.id === action.payload.id
          ?{ ...item, qty: item.qty + 1 }
          : item
      )}
    },
    decreaseQuantityCart:(state, action)=>{
      return {cartData: state.cartData.map((item) =>
          +item.id === action.payload.id
            ? { ...item, qty: item.qty === 1 ? 1 : item.qty - 1 }
            : item
        )}
    },
    deleteItemCart:(state, action)=>{
      return {cartData: state.cartData.filter((item) =>+item.id !== action.payload.id)}
     },


  },
});

export const { addProductCart,updateProductCart,increaseQuantityCart,decreaseQuantityCart,deleteItemCart } = productReducer.actions;

export default productReducer.reducer;
