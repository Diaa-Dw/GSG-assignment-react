import React from "react";
import Product from "./Product";

const ProductContainer = ({ products, isLoading }) => {
  if (isLoading) {
    return <span className='loader'></span>;
  }
  return (
    <section className='products-container'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductContainer;
