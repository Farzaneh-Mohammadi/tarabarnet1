import React from "react";
import { useSelector } from "react-redux";

import { getAllProducts } from "../../features/productSlice";
import ProductCards from "./ProductCards";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const products = useSelector(getAllProducts);
  console.log(products);

  return (
    <div className={styles.cards}>
      {products.map((product) => {
        return (
          <div key={product.id}>
            
            <ProductCards data={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
