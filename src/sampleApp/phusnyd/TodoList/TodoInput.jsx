import { useState } from "react";
function TodoInput({ setTodos, todos }) {
  const [description, setDescription] = useState("");
  function handleAddTodos(todo) {
    setTodos((prevState) => [...prevState, todo]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newTodo = { id: Date.now(), description };
    handleAddTodos(newTodo);
  }
  return (
    <>
      <h1>LiftingStateUp</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
        <button className="add-todo">Add Todo </button>
      </form>
      <p>Total Todo: {todos.length}</p>
    </>
  );
}

export default TodoInput;
