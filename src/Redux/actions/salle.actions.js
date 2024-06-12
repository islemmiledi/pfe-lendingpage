import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseUrl } from "../../proxy";

export const getAllSalle = createAsyncThunk("get/allSalle", async () => {
  try {
    let response = await axios.get(`${apiBaseUrl}salle/salles`);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const getOneSalleById = createAsyncThunk(
  "get/SalleId",
  async ({ id }) => {
    try {
      let response = await axios.get(`${apiBaseUrl}salle/${id}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getSallesByTheme = createAsyncThunk("get/theme", async (theme) => {
  try {
    let response = await axios.post(`${apiBaseUrl}salle/${theme}`);
    return response;
  } catch (error) {
    console.log(error);
  }
});
