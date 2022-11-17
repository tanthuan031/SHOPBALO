import { createSlice } from '@reduxjs/toolkit';

export const shopClientReducer = createSlice({
  name: 'shopClient',
  initialState: {
    categoryId: undefined,
    fillterPriceStart: undefined,
    fillterPriceEnd: undefined,
    search: undefined,
  },
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setFillterPriceStart: (state, action) => {
      state.fillterPriceStart = action.payload;
    },
    setFillterPriceEnd: (state, action) => {
      state.fillterPriceEnd = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    }
  },
});

export const { setCategoryId, setFillterPriceStart, setFillterPriceEnd, setSearch } = shopClientReducer.actions;

export default shopClientReducer.reducer;
