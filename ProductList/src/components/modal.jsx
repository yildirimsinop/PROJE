import React from "react";

const ProductDetails = ({ product, onClose }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ProductDetails;
