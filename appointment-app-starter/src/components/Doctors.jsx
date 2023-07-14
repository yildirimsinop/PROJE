import Container from "react-bootstrap/Container";
import { doctorData } from "../helper/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Doctors = () => {
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3" style={{ color: "rgb(166, 18, 189)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map((item) => (
          <Col>
            <img src={item.img} alt="" />
            <h3>{item.name}</h3>
            <h4>{item.dep}</h4>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Doctors;
