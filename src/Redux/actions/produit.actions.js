import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseUrl } from "../../proxy";
import cartSlice, { removeCartItem } from "../slice/cartSlice";

export const getAllProduits = createAsyncThunk("get/AllProduits", async () => {
  try {
    let response = await axios.get(`${apiBaseUrl}produit/produits`);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const ajoutOrdre = createAsyncThunk("post/ajoutOrdre", async (form) => {
  try {
    let response = await axios.post(`${apiBaseUrl}ordre/create`, form);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const addItemsToCart = createAsyncThunk(
  "cart/addItemsToCart",
  async ({ id, quantity }) => {
    const data = await axios.get(`${apiBaseUrl}produit/${id}`);

    const productData = {
      product: data?.data?.id,
      name: data?.data?.Nomproduit,
      price: data?.data?.Prix,
      image: data?.data?.file,
      description: data?.data?.Description,
      quantity,
    };

    return productData;
  }
);
export const removeItemsFromCart = createAsyncThunk(
  "cart/removeItemsFromCart",
  async (id, { dispatch }) => {
    dispatch(removeCartItem(id));
  }
);
