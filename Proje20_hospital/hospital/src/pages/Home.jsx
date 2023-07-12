import { Container, Row, Col } from "react-bootstrap";
import AddModal from "../components/AddModal";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { appointmentData, doctorData } from "../helpers/data";
import "../App.css";
import React, { useState, useEffect } from "react"; // useState ve useEffect import edildi.

const Home = () => {
  const [show, setShow] = useState(false);
  const [doctorName, setDoctorName] = useState("");
  const handleClose = () => {
    setShow(false);
    setDoctorName(""); // Reset doctor name when modal is closed
  };
  return (
    <>
      <h1> HOSPITAL </h1>
      <h3>OUR DOCTORS</h3>
      {/* <Doctors />
      {/* <AddModal /> */}
      {/* <AppointmentList /> */}

      <Container>
        <h3>Doctors List</h3>
        <Row>
          {doctorData.map((item) => (
            <Col xs={6} md={4} lg={3} key={item.id} className="mb-3 doctor-col">
              <Doctors
                {...item}
                setDoctorName={setDoctorName}
                setShow={setShow}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* <AddModal show={show} handleClose={handleClose} doctorName={doctorName} /> */}
      <Container>
        <h3>Appointment List</h3>
        {appointmentData.map((item) => (
          <AppointmentList key={item.id} {...item} />
        ))}
      </Container>
    </>
  );
};

export default Home;
