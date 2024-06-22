import React from 'react'
import About from './components/performance-hook/About'
import Product from './components/performance-hook/Product'
import Todos from './components/performance-hook/Todos'

function PerformanceHook() {
  const [count, setCount] = React.useState(1);
  const [movie ,setMovie] = React.useState({
    title: 'tony',
    name: 'spider man',
    year: 1988
  }); 

  // re-created during component re-render
  const increment = React.useCallback(() => {
    console.log('useCallback: ', count)
    setCount(count + 1)
  }, [count]) // memory A

  function updateMovie() {
    setMovie(prevState => ({
      ...prevState,
      name: `spider man ${Date.now()}`
    }))
  }

  console.log('Performance hooks render: ---')

  return (
    <div>
      <h1>PerformanceHook</h1>

      <About 
        count={count} 
        increment={increment} 
        movie={movie}
        updateMovie={updateMovie}
      /> 
      <br />

      <Product 
        movie={movie}
      />
      <br />
      <Todos 
        increment={increment}
      />
    </div>
  )
}

export default PerformanceHook
