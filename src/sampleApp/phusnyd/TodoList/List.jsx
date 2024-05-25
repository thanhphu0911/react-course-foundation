function List({ todos, onDeleteTodo }) {
  return (
    <>
      {todos &&
        todos.map((todo) => {
          return (
            <div className="todo-box" key={todo.id}>
              {todo.description}{" "}
              <button className="del-btn" onClick={() => onDeleteTodo(todo.id)}>
                Delete
              </button>
            </div>
          );
        })}
    </>
  );
}

export default List;
