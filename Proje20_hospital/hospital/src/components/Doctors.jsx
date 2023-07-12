import React, { useState } from "react"; // useState import edildi.
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import AddModal from "./AddModal";

const Doctors = ({ id, name, dep, img, setDoctorName }) => {
  // const [doctorName, setDoctorName] = useState(""); bu satır silindi çünkü props'tan gelen setDoctorName ile çakışma oluyordu.
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card style={{ width: "18rem" }} className="m-2" onClick={handleShow}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{dep}</Card.Text>
          {/* <Button
            variant="primary"
            onClick={() => {
              setShow(true);
              setDoctorName(name);
            }}
          >
            See Appointments
          </Button> */}
        </Card.Body>
      </Card>
      <AddModal name={name} show={show} setShow={setShow} />
    </div>
  );
};

export default Doctors;
