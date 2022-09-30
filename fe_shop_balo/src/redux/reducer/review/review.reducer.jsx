import { createSlice } from '@reduxjs/toolkit';

export const reviewReducer = createSlice({
  name: 'review',
  initialState: {
    isAdd: false,
    isEdit: false,
    isReset: 'reset-page',
    review: {},
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
    setReview: (state, action) => {
      state.review = { ...action.payload };
    },
  },
});

export const { setIsAdd, setIsEdit, setIsReset, setReview } = reviewReducer.actions;
export default reviewReducer.reducer;
