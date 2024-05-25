// eslint-disable-next-line react/prop-types
export default function ToDoList({todos, deleteTodo}) {
    return (
        <ul >
            {todos.map( (todo) => (
                <li className="liTodo" key={todo}>
                    {todo}
                    <button className="btnDel" onClick={() => deleteTodo(todo)}>Delete</button>
                    </li>
            ))}
        </ul>
    );
}