// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sidebarSlice';
import labsidebarReducer from './labSidebarSlice';
import labProfileReducer from './labProfileSlice';
import sadcasAsidebarReducer from './sadcasASidebarSlice';
import sadcasaReducer from './sadacasaSlice';
import sadcasbReducer from './sadcasbSlice';
import sadcasBsidebarReducer from './sadcasBSidebarSlice';



const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Handle errors here
  }
};

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    labsidebar: labsidebarReducer,
    labProfile: labProfileReducer,
    sadcasAsidebar : sadcasAsidebarReducer,
    sadcasBsidebar: sadcasBsidebarReducer,
    sadcasa:sadcasaReducer,
    sadcasb:sadcasbReducer
    

  },
  preloadedState: loadState(),
});

// Save state whenever it changes
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
