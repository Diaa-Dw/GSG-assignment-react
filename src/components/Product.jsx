import React from "react";

const Product = ({ product }) => {
  return (
    <div className='product-item'>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <div>
        <p>{product.price}$</p>
      </div>
    </div>
  );
};

export default Product;
