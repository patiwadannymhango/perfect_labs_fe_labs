// src/redux/sidebarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const sadcasAsidebarSlice = createSlice({
  name: 'sadcasasidebar',
  initialState: {
    showItems3: true, // Initial state for showing items
    labProfileId: null, // Initial state for labProfileId
  },
  reducers: {
    toggleItems3(state) {
      state.showItems3 = !state.showItems3;
    },
    setShowItems3(state, action) {
      state.showItems3 = action.payload;
    },
    setLabProfileId(state, action) {
      state.labProfileId = action.payload;
    },
  },
});


export const { toggleItems3, setShowItems3, setLabProfileId } = sadcasAsidebarSlice.actions;

export default sadcasAsidebarSlice.reducer;
