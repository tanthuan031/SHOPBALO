import { createSlice } from '@reduxjs/toolkit';

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    key: 0,
    isLogin: false,
    expiredToken: false,
  },
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload;
    },
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setExpiredToken: (state, action) => {
      state.expiredToken = action.payload;
    },
  },
});

export const { setIsLogin, setExpiredToken } = authReducer.actions;

export default authReducer.reducer;
