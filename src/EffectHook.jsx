import React from 'react'
import BasicButton from './components/BasicButton';

// memory A
function randomCount() {
  console.log('randomCount')
  return 10;
}

function EffectHook() {
  const [count, setCount] = React.useState(randomCount); //  React.useState(10);
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    console.log('useEffect no dependency -->:', count) 
  })

  React.useEffect(() => {
    console.log('useEffect with empty array dependency -->:',  count) 
  }, []); // run once time when component first-render

  React.useEffect(() => {
    console.log('useEffect with count array dependency -->: ', count) 
  }, [count]); // run once time when component first-render

  // fetch todo
  React.useEffect(() => {
    async function fetchTodo() {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5&_page=1');
      const data = await res.json();
      setTodos(data);
    }
    fetchTodo();
  }, [])


  function increment() {
    setCount((prevState) => prevState + 1); // syntax: arrow function
  }

  console.log('EffectHook: ', todos)


  return (
    <div>
      <h1>EffectHook</h1>
      Count: {count}
      <br />
      <BasicButton 
        text="Update increment"
        onClick={increment}
      />

      <h4>Todo with useEffect:</h4>
      <div>
        {/* {todos.map(todo => {
          return (
            <div>
              Id: xxx <br />
              Title: xxx <br />
            </div>
          )
        })} */}
        {todos.map(todo => (
          <div key={todo.id}>
            Id: {todo.id} <br />
            Title: {todo.title} <br />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EffectHook