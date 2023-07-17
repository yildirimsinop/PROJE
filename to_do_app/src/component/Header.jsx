import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

const Header = () => {
  const [add, setAdd] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="container mt-4 text-center text-danger w-50">
      <h1>Todo App</h1>
      <InputGroup className="mb-3 mt-4 ">
        <Form.Control
          placeholder="Enter new todo"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <Button
          className="bg-success text-light"
          variant="outline-secondary"
          id="button-addon2"
        >
          Add Todo
        </Button>
      </InputGroup>
    </div>
  );
};
export default Header;
