import { createSlice } from '@reduxjs/toolkit';

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    key: 0,
    isLogin: false,
    expiredToken: false,
    isForgotPassword: false,
    user: {},
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
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsForgotPassword: (state, action) => {
      state.isForgotPassword = action.payload;
    },
  },
});

export const { setIsLogin, setExpiredToken, setUser, setIsForgotPassword } = authReducer.actions;

export default authReducer.reducer;
