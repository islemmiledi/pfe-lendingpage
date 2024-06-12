import { createSlice } from "@reduxjs/toolkit";
import {
  addItemsToCart,
  removeItemsFromCart,
} from "../actions/produit.actions";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      console.log(item);
      const existingItem = state.cartItems.find(
        (x) => x.product === item.product
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) =>
        console.log(item)
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(addItemsToCart.fulfilled, (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find(
        (x) => x.product === item.product
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.cartItems.push(item);
      }

      // Update the localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    });
    builder.addCase(removeItemsFromCart.fulfilled, (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    });
  },
});

export const { removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
