import { createSlice } from '@reduxjs/toolkit';

export const slideReducer = createSlice({
  name: 'slide',
  initialState: {
    isAdd: false,
    isEdit: false,
    isReset: 'reset-page',
    status: 'All',
    sort: 'asc',
    slide: {},
  },
  reducers: {
    setIsAdd: (state, action) => {
      state.isAdd = action.payload;
    },
    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    setIsReset: (state, action) => {
      state.isReset = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setSlide: (state, action) => {
      state.slide = { ...action.payload };
    },
  },
});

export const { setIsAdd, setIsEdit, setIsReset, setStatus, setSort, setSlide } = slideReducer.actions;

export default slideReducer.reducer;
