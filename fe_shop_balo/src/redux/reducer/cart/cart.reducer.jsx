import { createSlice } from '@reduxjs/toolkit';
const dataShop = JSON.parse(localStorage.getItem("cart"));

const yourCart = !!dataShop.cart.cartData ? dataShop.cart.cartData : [];
console.log(dataShop);
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
          // console.log(data);

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
        item.id === action.payload // chinh lai
      );
      return existCart
        ? state.cartData.map((item) =>
          item.id === action.payload.product.id
            ? { ...item, qty: item.qty + action.payload.quantity }
            : item
        )
        : [
          ...state.cart,
          { ...action.payload.product.id, qty: action.payload.quantity },
        ];
    },

  },
});

export const { addProductCart,updateProductCart } = productReducer.actions;

export default productReducer.reducer;
