import { createSlice } from "@reduxjs/toolkit";
import { getAllSalle, getOneSalleById } from "../actions/salle.actions"; // Assurez-vous que le chemin d'importation est correct

const initialState = {
  salle: {},
  salles: [],
  loading: false,
  error: null,
};

export const salleSlice = createSlice({
  name: "salle",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllSalle.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllSalle.fulfilled, (state, action) => {
      state.salles = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllSalle.rejected, (state, action) => {
      state.salles = [];
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getOneSalleById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getOneSalleById.fulfilled, (state, action) => {
      state.salle = action.payload;
      state.loading = false;
    });
    builder.addCase(getOneSalleById.rejected, (state, action) => {
      state.salle = {};
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default salleSlice.reducer;
