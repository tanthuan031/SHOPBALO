import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

export const categoryReducer = createSlice({
    name: 'category',
    initialState: {
        isAdd: false,
    },
    reducers: {
        setIsAdd: (state, action) => {
            state.isAdd = action.payload;
        },
    },
});

export const { setIsAdd } = categoryReducer.actions;

export default categoryReducer.reducer;
