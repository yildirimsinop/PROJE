import Accordion from "react-bootstrap/Accordion";
import Data from "../hjelper/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// App.css not needed if we are not using any custom CSS

const Question = () => {
  console.log(Data);
  return (
    <div className="justify-content-center">
      {Data.map((item, index) => (
        <Row key={item.id} className="mb-3">
          <Col md={{ span: 4, offset: 4 }}>
            <Accordion className="accordion">
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header className="text-danger">
                  {item.question}
                </Accordion.Header>
                <Accordion.Body className="text-white bg-dark">
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
