import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const orderReducer = createSlice({
  name: 'order',
  initialState: {
    key: 0,
    isEdit: false,
    isDetail: false,
    orderById: {},
  },
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload;
    },
    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    setOrder: (state, action) => {
      state.orderById = action.payload;
    },
  },
});
export const { setIsEdit, setOrder } = orderReducer.actions;
export default orderReducer.reducer;
