import { createSlice } from '@reduxjs/toolkit';

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    key: 0,
    isLogin: false,
    expiredToken: false,
    isForgotPassword: false,
    isForgotPasswordVerification: false,
    user: {},
    emailForgot: '',
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
    setIsForgotPasswordVerification: (state, action) => {
      state.isForgotPasswordVerification = action.payload;
    },
    setEmailForgot: (state, action) => {
      state.emailForgot = action.payload;
    },
  },
});

export const {
  setIsLogin,
  setExpiredToken,
  setUser,
  setIsForgotPassword,
  setIsForgotPasswordVerification,
  setEmailForgot,
} = authReducer.actions;

export default authReducer.reducer;
