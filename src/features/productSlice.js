import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../FakeData";
import { useParams } from "react-router-dom";
import axios from "axios";

  

  const initialState = {
    products: ProductsData,
    selectedProduct: {},
  };
  


export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    // deleteProduct: (state, action) => {
    //     state.value = state.value.filter((product) => product.id !== action.payload.id)
    // },

    addProducts: (state, { payload }) => {
        state.products = payload;
      },

    deleteProducts: (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      },

      showDetail: (state, action) => {
        state.products = state.products.find( (product) => product.id === action.payload.id);

        return { ...state };

      },
  

  },



});


export const { addProducts, deleteProducts, showDetail } = productSlice.actions;
export const getAllProducts = (state) => state.reducer.products;
export const getSelectedProduct = (state) => state.reducer.selectedProduct;
export default productSlice.reducer;
