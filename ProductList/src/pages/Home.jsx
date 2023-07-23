import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Home = () => {
  const data = async () => {
    const dataUrl = " https://fakestoreapi.com/products";
    let res = await axios.get(dataUrl);
    let { data } = res.data;
    console.log(data);
  };
  return (
    <div>
      <Header />
      <ProductCard />
    </div>
  );
};

export default Home;
