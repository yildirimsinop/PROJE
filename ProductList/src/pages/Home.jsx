import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);

  const filteredProducts =
    selectedCategory === "ALL"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <Header setSelectedCategory={setSelectedCategory} />
      <ProductList products={filteredProducts} />
    </div>
  );
};
export default Home;
