import { configureStore } from "@reduxjs/toolkit";
import insuaranceReducer from "../features/insuarance/insuaranceSlice";

export const store = configureStore({
  reducer: {
    insurance: insuaranceReducer,
  }
});
