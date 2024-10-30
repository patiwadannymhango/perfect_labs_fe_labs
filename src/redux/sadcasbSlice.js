// src/redux/labProfileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id:"",

};

const sadcasbSlice = createSlice({
    name: 'sadcasb',
    initialState,
    reducers: {
        setSadcasb(state, action) {
            return { ...state, ...action.payload };
        },
        resetSadcasb(state) {
            return initialState;
        },
    },
});

export const { setSadcasb, resetSadcasb } = sadcasbSlice.actions;

export default sadcasbSlice.reducer;
