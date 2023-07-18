import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { AiOutlineDelete } from "react-icons/ai";

const TodoList = ({ todos }) => {
  return (
    <div className="container w-50">
      <h1 className="text-center">Todos</h1>
      <ListGroup>
        {todos.map((todo, index) => (
          <ListGroup.Item key={index}>
            {todo}
            <AiOutlineDelete
              className="text-danger"
              style={{ float: "right" }}
            />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
