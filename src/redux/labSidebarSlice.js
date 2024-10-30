// src/redux/sidebarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const labSidebarSlice = createSlice({
  name: 'labsidebar',
  initialState: {
    showItems2: true, // Initial state for showing items
    labProfileId: null, // Initial state for labProfileId
  },
  reducers: {
    toggleItems2(state) {
      state.showItems2 = !state.showItems2;
    },
    setShowItems2(state, action) {
      state.showItems2 = action.payload;
    },
    setLabProfileId(state, action) {
      state.labProfileId = action.payload;
    },
  },
});


export const { toggleItems2, setShowItems2, setLabProfileId } = labSidebarSlice.actions;

export default labSidebarSlice.reducer;
