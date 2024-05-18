import React from 'react';
import ListItem from './components/ListItem';

function ListKey() {
  const [todos, setTodos] = React.useState([
    { text: 'Learn React', score: 10 }, 
    { text: 'Learn Redux', score: 5 }
  ])
  const dataTodos = todos ? todos.map(item => {
    return {
      ...item,
      id: Math.floor(Math.random() * 1000)
    }
  }) : [];

  

  function incrementScore(todoId) {
    const cloneTodos = [...dataTodos]; // shallow clone/deep clone
    const todoIndex = cloneTodos.findIndex(todo => todo.id === todoId);
    
    if(todoIndex === -1) return;
    cloneTodos[todoIndex].score =  cloneTodos[todoIndex].score + 1;

    console.log("cloneTodos: ", cloneTodos)
    setTodos(cloneTodos)
  }

  console.log("todos: ", dataTodos)

  function decrementScore(todoId) {
    const cloneTodos = [...dataTodos];
    const todoIndex = cloneTodos.findIndex(todo => todo.id === todoId);
    
    if(todoIndex === -1) return;
    cloneTodos[todoIndex].score =  cloneTodos[todoIndex].score - 1
    setTodos(cloneTodos)
  }

  // const todosComponent = todos.map(todo => {
  //   return (
  //     <div key={todo.id}>Title: {todo.text}</div>
  //   )
  // })

  return (
    <div>
      <h1>ListKey</h1>
      {/* {todosComponent} */}
      <ul className="list-group">
        {dataTodos.map(todo => {
          return (
            <React.Fragment key={todo.id}>
              <li className="list-group-item">
                <ListItem todo={todo} incrementScore={incrementScore} decrementScore={decrementScore} />
              </li>
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export default ListKey

// <ul className="list-group">
//   <li className="list-group-item">An item</li>
//   <li className="list-group-item">A second item</li>
//   <li className="list-group-item">A third item</li>
//   <li className="list-group-item">A fourth item</li>
//   <li className="list-group-item">And a fifth one</li>
// </ul>