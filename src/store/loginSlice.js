import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: null,
	password: null,
	sessionInfo: null,
};

export const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		setEmail: (state, action) => {
			state.email = action.payload;
		},
		setPassword: (state, action) => {
			state.password = action.payload;
		},
		setSessionInfo: (state, action) => {
			state.sessionInfo = action.payload;
		},
	},
});

export const { setEmail, setPassword, setSessionInfo } = loginSlice.actions;

export default loginSlice.reducer;
