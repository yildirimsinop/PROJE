import Accordion from "react-bootstrap/Accordion";
import Data from "../hjelper/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";

const Question = () => {
  console.log(Data);
  return (
    <div className="justify-content-center">
      {Data.map((item, index) => (
        <Row key={item.id} className="mb-3">
          <Col md={{ span: 6, offset: 3 }}>
            <Accordion>
              <Accordion.Item eventKey={index.toString()} className="no-border">
                <Accordion.Header
                  className="text-danger"
                  style={{ fontSize: "2em" }}
                >
                  {item.question}
                </Accordion.Header>
                <Accordion.Body className="text-white bg-secondary">
                  {item.answer}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Question;
