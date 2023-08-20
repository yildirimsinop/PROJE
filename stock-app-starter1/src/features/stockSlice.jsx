import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "auth",

  initialState: {
    loading: false,
    error: false,
    sales: [],
    purchases: [],
    firms: [],
    categories: [],
    brands: [],
    products: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    getFirmsSuccess: (state, { payload }) => {
      state.loading = false;

      state.firms = payload;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, fetchFail, getFirmsSuccess } = stockSlice.actions;
export default stockSlice.reducer;
