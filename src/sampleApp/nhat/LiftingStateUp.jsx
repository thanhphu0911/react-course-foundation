import { useState } from "react";
import ToDoForm from "./ToDoForm.jsx"
import ToDoList from "./ToDoList.jsx";
import "./style.css"
export default function LiftingStateUp() {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]);
    
    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
      };
      const deleteTodo = (todo) => {
        console.log(todo);
        setTodos(prevState => 
          prevState.filter(ele => ele !== todo));

      };
    
      return (
        <div>
          <h1>Listing State Up</h1>
          <ToDoForm newToDo={newTodo} setNewTodo={setNewTodo} addTodo={() => addTodo(newTodo)} />
          <ToDoList todos={todos} deleteTodo={deleteTodo} />
          <p>Total todos: {todos.length}</p>
        </div>
      );

}