import React from 'react'
import BasicButton from './components/BasicButton';

function PhuEffectHook() {
  const [todos, setTodos] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(5);

  React.useEffect(() => {
    console.log('run effect with empty dependency', page);
    fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
      .then(res => res.json())
      .then(data => setTodos(data))

    return () => {
      console.log('cleanup effect with empty dependency');
    }
  }, [page, limit])

  console.log('---------')
  console.log('PhuEffectHook render', page)

  return (
    <div>
      <h1>PhuEffectHook</h1>
        Page: {page} {" "}
        <BasicButton 
          text="Next Page"
          onClick={() => setPage(prevState => prevState + 1)}
        />
        <br />

        Limit: {limit} {" "}
        <select onChange={e => setLimit(e.target.value)}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>


      {todos.length > 0 ? (
        <div>
          {todos.map(todo => (
            <div key={todo.id}>{todo.title}</div>
          ))}
        </div>
      ) : (
        <div>No Data</div>
      )}
    </div>
  )
}

export default PhuEffectHook