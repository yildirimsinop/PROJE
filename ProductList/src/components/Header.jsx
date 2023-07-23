import React from "react";
import { Container } from "react-bootstrap";
import "../../src/index.css"; // custom styles

const Header = ({ setSelectedCategory }) => {
  const categories = [
    "ALL",
    "ELECTRONICS",
    "JEWELERY",
    "MEN'S CLOTHING",
    "WOMEN'S CLOTHING",
  ];

  return (
    <div>
      <h1 className="text-align-center header-title">Products List</h1>
      <Container className="header-container">
        {categories.map((category) => (
          <div
            key={category}
            className="header-link"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default Header;
