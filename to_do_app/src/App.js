import { useState } from "react";
import Header from "./component/Header";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };
  return (
    <div className="App">
      <Header addTodo={addTodo} />{" "}
      {/* addTodo propunu Header bileşenine geçiyoruz */}
      <TodoList todos={todos} />{" "}
      {/* todos propunu TodoList bileşenine geçiyoruz */}
    </div>
  );
}

export default App;
