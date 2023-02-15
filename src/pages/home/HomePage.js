import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductList from "./../../components/products/ProductList";
// import { fetchAsyncProducts } from "../../features/products/productSlice";
import { addProducts, getAllProducts } from "../../features/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  const products = useSelector(getAllProducts);
  console.log(products);

  // useEffect(() => {
  //   dispatch(fetchAsyncProducts());
  // }, [dispatch]);


  useEffect(() => {

    const fetchProducts = () => {
      const response = products;
      console.log("res", response)
      dispatch(addProducts(response))
    }
  
    fetchProducts()
    }, [])

    
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default HomePage;
