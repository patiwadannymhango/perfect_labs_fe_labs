// src/redux/labProfileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id:"",

};

const sadcasaSlice = createSlice({
    name: 'sadcasa',
    initialState,
    reducers: {
        setSadcasa(state, action) {
            return { ...state, ...action.payload };
        },
        resetSadcasa(state) {
            return initialState;
        },
    },
});

export const { setSadcasa, resetSadcasa } = sadcasaSlice.actions;

export default sadcasaSlice.reducer;
