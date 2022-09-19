import { createSlice } from '@reduxjs/toolkit';


export const staffReducer = createSlice({
  name: 'staff',
  initialState: {
    key: 0,
    isAdd: false,
    isEdit: false,
    staff: {},
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

export const { setIsAdd } = staffReducer.actions;

export default staffReducer.reducer;
