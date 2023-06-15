import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: null,
    password: null,
    rememberMe: false,
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
		setRememberMe: (state, action) => {
			state.rememberMe = action.payload;
		},
		setSessionInfo: (state, action) => {
			state.sessionInfo = action.payload;
		},
	},
});

export const { setEmail, setPassword, setRememberMe, setSessionInfo } = loginSlice.actions;

export default loginSlice.reducer;
