import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicDetails: {
    title: "",
    firstName: "",
    lastName: "",
    age: null,
    maritalStatus: "", // "single" | "married"
    spouseName: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveBasicDetails(state, action) {
      state.basicDetails = { ...state.basicDetails, ...action.payload };
    },
    clearBasicDetails(state) {
      state.basicDetails = initialState.basicDetails;
    },
  },
});

export const { saveBasicDetails, clearBasicDetails } = userSlice.actions;
export default userSlice.reducer;
