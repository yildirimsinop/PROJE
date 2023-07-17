import ListGroup from "react-bootstrap/ListGroup";
import { AiOutlineDelete } from "react-icons/ai";

const TodoList = () => {
  return (
    <div className="container w-50">
      <ListGroup>
        <ListGroup.Item variant="info">
          {" "}
          <AiOutlineDelete className="text-danger" style={{ float: "right" }} />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default TodoList;
