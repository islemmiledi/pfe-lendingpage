import { createSlice } from "@reduxjs/toolkit";
import {
  getAllSalle,
  getOneSalleById,
  getSallesByTheme,
} from "../actions/salle.actions"; // Assurez-vous que le chemin d'importation est correct
import { ajoutOrdre, getAllProduits } from "../actions/produit.actions";

const initialState = {
  produit: {},
  produits: [],
  ordre: {},

  loading: false,
  error: null,
};

export const produitSlice = createSlice({
  name: "produit",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProduits.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProduits.fulfilled, (state, action) => {
      state.produits = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllProduits.rejected, (state, action) => {
      state.produits = [];
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(ajoutOrdre.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ajoutOrdre.fulfilled, (state, action) => {
      state.ordre = action.payload;
      state.loading = false;
    });
    builder.addCase(ajoutOrdre.rejected, (state, action) => {
      state.ordre = {};
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default produitSlice.reducer;
