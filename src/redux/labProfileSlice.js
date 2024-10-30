// src/redux/labProfileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    id:"",
    auditor: "",
    lab_name: "",
    lab_number: "",
    lab_address: "",
    lab_phone: "",
    lab_fax: "",
    lab_email: "",
    lab_level: "",
    lab_type: "",
    lab_rep_name: "",
    lab_rep_tel_personal: "",
    lab_rep_tel_work: "",
    lab_type_description: "",
    full_time_degree_holders: 0,
    full_time_diploma_holders: 0,
    full_time_certificate_holders: 0,
    full_time_data_clerks: 0,
    full_time_phlebotomists: 0,
    full_time_cleaners: null,
    are_cleaners_lab_dedicated: 0,
    full_time_drivers: 0,
    are_drivers_lab_dedicated: "",
    are_degree_holders_adequate: "",
    are_diploma_holders_adequate: "",
    are_certificate_holders_adequate: "",
    are_data_clerks_adequate: "",
    are_phlebotomists_adequate: "",
    are_cleaners_adequate: "",
    are_cleaners_trained_safety_waste: "",
    are_drivers_adequate: "",
    are_drivers_trained_biosafety: "",
    full_time_others: null,
    are_others_adequate: "",
};

const labProfileSlice = createSlice({
    name: 'labProfile',
    initialState,
    reducers: {
        setLabProfile(state, action) {
            return { ...state, ...action.payload };
        },
        resetLabProfile(state) {
            return initialState;
        },
    },
});

export const { setLabProfile, resetLabProfile } = labProfileSlice.actions;

export default labProfileSlice.reducer;
