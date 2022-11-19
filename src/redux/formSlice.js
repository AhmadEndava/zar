import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    monto: "",
    submitted: false
};

export const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    setFormValues: (state, action) => {
    
      const { monto, submitted } = action.payload;
      state.monto = monto;
      state.submitted = !submitted;
    },
    resetFormValues: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setFormValues, resetFormValues } = formSlice.actions;


export default formSlice.reducer;