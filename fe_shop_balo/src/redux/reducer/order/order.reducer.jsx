import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const orderReducer = createSlice({
  name: 'order',
  initialState: {
    key: 0,
    isEdit: false,
    isDetail: false,
    idEditStatus: '',
    order: {},
  },
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload;
    },
    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    setIdEditStatus: (state, action) => {
      state.idEditStatus = action.payload;
    },
  },
});
export const { setIsEdit, setIdEditStatus } = orderReducer.actions;
export default orderReducer.reducer;
