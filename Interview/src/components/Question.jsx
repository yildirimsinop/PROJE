import Accordion from "react-bootstrap/Accordion";
import Data from "../hjelper/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Question = () => {
  console.log(Data);
  return (
    <div className="justify-content-center">
      {Data.map((item, index) => (
        <Row key={item.id} className="mb-3">
          <Col md={{ span: 4, offset: 4 }}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey={index.toString()}>
                <Accordion.Header>{item.question}</Accordion.Header>
                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default Question;
