
// eslint-disable-next-line react/prop-types
function ToDoForm({ newTodo, setNewTodo, addTodo }) {
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addTodo();
      setNewTodo('');
    };
  
    return (
      <form className="formTodo" onSubmit={handleSubmit}>
        <input className="inputTodo"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
        <button  className="btnSubmit" type="submit">Add Todo</button>
      </form>
    );
  }
  export default ToDoForm;