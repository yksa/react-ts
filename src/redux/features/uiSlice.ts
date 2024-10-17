import { createSlice } from "@reduxjs/toolkit";

export interface UiState {
  isSideMenuOpen: boolean;
}

const initialState: UiState = {
  isSideMenuOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSideMenu(state) {
      state.isSideMenuOpen = !state.isSideMenuOpen;
    },
  },
});

export const { toggleSideMenu } = uiSlice.actions;

export default uiSlice.reducer;
