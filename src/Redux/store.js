import { configureStore } from "@reduxjs/toolkit";
import salleSlice from "./slice/salleSlice";
import produitSlice from "./slice/produitSlice";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    salle: salleSlice,
    produit: produitSlice,
    cart: cartSlice,
  },
});
export default store;
