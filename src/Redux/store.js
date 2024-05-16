import { configureStore } from "@reduxjs/toolkit";
import salleSlice from "./slice/salleSlice";

const store = configureStore({
  reducer: {
    salle: salleSlice,
  },
});
export default store;
