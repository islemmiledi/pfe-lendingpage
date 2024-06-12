import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiBaseUrl } from "../../proxy";

export const getAllMonthlyPlans = createAsyncThunk(
  "get/AllMonthlyPlan",
  async () => {
    try {
      let response = await axios.get(`${apiBaseUrl}offre/offres`);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
