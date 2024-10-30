// src/redux/sidebarSlice.js
import { createSlice } from '@reduxjs/toolkit'

const sadcasBsidebarSlice = createSlice({
	name: 'sadcasbsidebar',
	initialState: {
		showItems4: true, // Initial state for showing items
		labProfileId: null, // Initial state for labProfileId
	},
	reducers: {
		toggleItems4(state) {
			state.showItems4 = !state.showItems4
		},
		setShowItems4(state, action) {
			state.showItems4 = action.payload
		},
		setLabProfileId(state, action) {
			state.labProfileId = action.payload
		},
	},
})

export const { toggleItems4, setShowItems4, setLabProfileId } =
	sadcasBsidebarSlice.actions

export default sadcasBsidebarSlice.reducer
