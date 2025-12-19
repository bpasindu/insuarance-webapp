import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalDetails: {
    title: "Male",
    firstName: "",
    lastName: "",
    dob: ""
  }
};

const insuranceSlice = createSlice({
  name: "insurance",
  initialState,
  reducers: {
    updatePersonalDetails: (state, action) => {
      state.personalDetails = {
        ...state.personalDetails,
        ...action.payload
      };
    }
  }
});

export const { updatePersonalDetails } = insuranceSlice.actions;
export default insuranceSlice.reducer;
