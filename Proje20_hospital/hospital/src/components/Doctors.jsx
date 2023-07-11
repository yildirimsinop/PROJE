import Card from "react-bootstrap/Card";

const Doctors = ({ id, name, dep, img }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <Card.Text>{dep}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Doctors;
