import TodoInput from "./TodoInput";
import List from "./List";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, description: "Learn React" },
    { id: 2, description: "Learn Redux" },
  ]);
  function handleDeleteTodo(id) {
    console.log(id);
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }
  return (
    <div className="App">
      <TodoInput todos={todos} setTodos={setTodos} />
      <List todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}
