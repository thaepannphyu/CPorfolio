import { configureStore } from "@reduxjs/toolkit";
import NavLinkSlice from "./NavLinkSlice";

export const store = configureStore({
  reducer: {
    NavLink: NavLinkSlice,
  },
});
