import React from 'react'
import { useDispatch } from 'react-redux'
import About from './components/performance-hook/About'
import Product from './components/performance-hook/Product'
import Todos from './components/performance-hook/Todos'

import { incrementCount } from './states/actions/app.action';
import { useSmallScreen } from './hooks/useSmallScreen'

function PerformanceHook() {
  const { isSmalScreen, multiple } = useSmallScreen();
  const dispatch = useDispatch();
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
    dispatch(incrementCount(10))
  }, [count]) // memory A

  function updateMovie() {
    setMovie(prevState => ({
      ...prevState,
      name: `spider man ${Date.now()}`
    }))
  }

  console.log('Performance hooks render: ---', multiple)

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

      <br />
      Demo Custom hooks - small screen: {isSmalScreen ? ' yes' : 'no'}
    </div>
  )
}

export default PerformanceHook
