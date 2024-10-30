// src/redux/sidebarSlice.js
import { createSlice } from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState: {
		showItems: true, //Initial state for showing items
		showComms: true, //Initial state for showing communications and reports menu
		labProfileId: null, //Initial state for labProfileId
	},
	reducers: {
		toggleItems(state) {
			state.showItems = !state.showItems
		},
		setShowItems(state, action) {
			state.showItems = action.payload
		},
		setLabProfileId(state, action) {
			state.labProfileId = action.payload
		},

		setShowComms(state, action) {
			state.showComms = action.payload
		},
	},
})

export const { toggleItems, setShowItems, setLabProfileId, setShowComms } =
	sidebarSlice.actions

export default sidebarSlice.reducer
