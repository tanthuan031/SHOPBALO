import { createSlice } from '@reduxjs/toolkit';
import React from 'react';

export const categoryReducer = createSlice({
    name: 'category',
    initialState: {
        isAdd: false,
        isEdit: false,
        category: {},
    },
    reducers: {
        setIsAdd: (state, action) => {
            state.isAdd = action.payload;
        },
        setIsEdit: (state, action) => {
            state.isEdit = action.payload;
        },
        setCategory: (state, action) => {

            state.category = { ...action.payload };

        },
    },
});

export const { setIsAdd, setIsEdit, setCategory } = categoryReducer.actions;

export default categoryReducer.reducer;
