import Card from "react-bootstrap/Card";

const Doctors = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title> Title</Card.Title>
        <Card.Text>depart</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Doctors;
