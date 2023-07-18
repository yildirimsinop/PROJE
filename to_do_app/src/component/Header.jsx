import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Header = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleButton = () => {
    if (inputValue !== "") {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
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
          value={inputValue}
        />
        <Button
          className="bg-success text-light"
          variant="outline-secondary"
          id="button-addon2"
          onClick={handleButton}
        >
          Add Todo
        </Button>
      </InputGroup>
    </div>
  );
};

export default Header;
