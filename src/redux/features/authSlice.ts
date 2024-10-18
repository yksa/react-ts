import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  accessToken: string | null;
  isAuthenticated: boolean;
};

const initialState: AuthState = {
  accessToken: null,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      state.isAuthenticated = !!action.payload; // Update authenticated status
    },
    clearAuth: (state) => {
      state.accessToken = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAccessToken, clearAuth } = authSlice.actions;

export default authSlice.reducer;
