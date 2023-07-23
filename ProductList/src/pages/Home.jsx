import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Home = () => {
  const [product, UseProduct] = useState([]);
  const [category, UseCategory] = useState([]);

  const dataProduct = async () => {
    const dataUrl = " https://fakestoreapi.com/products";

    try {
      // const res = await axios(dataUrl)
      // setTutorials(res.data)
      const { data } = await axios.get(dataUrl);
      UseProduct(data);
    } catch (error) {
      console.log(error);
    }
    console.log({ dataProduct });
  };

  useEffect(() => {
    dataProduct();
  }, []);

  const categoryData = async () => {
    const categoryUrl = " https://fakestoreapi.com/products/categories";

    try {
      // const res = await axios(categoryUrl)
      // setTutorials(res.data)
      const { category } = await axios.get(categoryUrl);
      UseCategory(category);
    } catch (error) {
      console.log(error);
    }
    console.log({ category });
  };

  useEffect(() => {
    categoryData();
  }, []);
  return (
    <div>
      <Header />
      <ProductCard dataProduct={dataProduct} />
    </div>
  );
};

export default Home;
