import { Container } from "react-bootstrap";
import "../../src/index.css"; // custom styles

const Header = ({ dataProduct }) => {
  console.log(dataProduct.value);
  return (
    <div>
      <h1 className="text-align-center header-title">Products List</h1>
      <Container className="header-container">
        <div
          className="header-link"
          onClick={() => {
            /* Handle ALL click here */
          }}
        >
          ALL
        </div>
        <div
          className="header-link"
          onClick={() => {
            /* Handle ELECTRONICS click here */
          }}
        >
          ELECTRONICS
        </div>
        <div
          className="header-link"
          onClick={() => {
            /* Handle JEWELERY click here */
          }}
        >
          JEWELERY
        </div>
        <div
          className="header-link"
          onClick={() => {
            /* Handle MEN'S CLOTHING click here */
          }}
        >
          MEN'S CLOTHING
        </div>
        <div
          className="header-link"
          onClick={() => {
            /* Handle WOMEN'S CLOTHING click here */
          }}
        >
          WOMEN'S CLOTHING
        </div>
      </Container>
    </div>
  );
};

export default Header;
