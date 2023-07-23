// ProductList.js
import ProductDetails from "./ProductDetails";
import { useState } from "react";

const ProductList = ({ products }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };

  return (
    <div>
      {products.map((product, index) => (
        <div key={index} onClick={() => handleProductClick(product)}>
          <img src={product.image} alt={product.title} />
        </div>
      ))}
      {showDetails && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
};

export default ProductList;
