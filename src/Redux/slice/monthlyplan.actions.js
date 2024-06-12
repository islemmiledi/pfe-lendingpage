import { createSlice } from "@reduxjs/toolkit";
// Assurez-vous que le chemin d'importation est correct
import { getAllMonthlyPlans } from "../actions/monthlyplan.actions";

const initialState = {
  monthlyplan: {},
  monthlyplans: [],

  loading: false,
  error: null,
};

export const monthlyplanSlice = createSlice({
  name: "monthlyplan",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMonthlyPlans.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllMonthlyPlans.fulfilled, (state, action) => {
      state.monthlyplans = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllMonthlyPlans.rejected, (state, action) => {
      state.monthlyplans = [];
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default monthlyplanSlice.reducer;
