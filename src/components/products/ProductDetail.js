import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, showDetail } from "../../features/productSlice";

import {
  getSelectedProduct,
} from "../../features/productSlice";
import styles from "./ProductDetail.module.css";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

 
  const products = useSelector(getAllProducts);

    // const data = products.find(prod => prod.id === productId);
  
  
//   useEffect(() => {
// dispatch(showDetail(productId));
//   }, [productId]);






  return (
    <div>

    <div className={styles.productDetailContainer}>
    {productId}
            {/* <div className={styles.productDetailImg}>
        <img src={data.image} alt={data.title} />
      </div> */}
      <div className={styles.productDetailInfo}>

        {/* <p>
          <b>Title: </b>
          {data.title}
        </p>
        <br />
        <p>
          <b>Category: </b>
          {data.category}
        </p>
        <br />
        <p>
          <b>Description: </b>
          {data.description}
        </p>
        <br />
        <p>
          <b>Price: </b>
          {data.price}
        </p> */}
      </div>
    </div>
  
  <div className={styles.backLink}>
            <Link to="/" style={{textDecoration: "underline", fontSize: "18px", marginTop:"1rem" }}>Back to Products Page</Link>
            </div>
    </div>
  );
};

export default ProductDetail;
