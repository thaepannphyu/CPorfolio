import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  menuBarger: false,
  theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark",
};

export const NavLinkSlice = createSlice({
  name: "NavLinkSlice",
  initialState,
  reducers: {
    setActive: (state, { payload }) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = payload;
    },
    setMenu: (state, { payload }) => {
      state.menuBarger = payload;
    },
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActive, setMenu, setTheme } = NavLinkSlice.actions;

export default NavLinkSlice.reducer;
