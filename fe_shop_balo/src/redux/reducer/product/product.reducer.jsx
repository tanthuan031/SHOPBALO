import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

export const productReducer = createSlice({
  name: 'product',
  initialState: {
    key: 0,
    isAdd: false,
    isEdit: false,
    product: {},
  },
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload;
    },
    setIsAdd: (state, action) => {
      state.isAdd = action.payload;
    },
  },
});

export const { setIsAdd } = productReducer.actions;

export default productReducer.reducer;
