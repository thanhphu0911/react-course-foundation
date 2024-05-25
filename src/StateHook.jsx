import React from 'react'
import BasicButton from './components/BasicButton';

// memory A
function randomCount() {
  console.log('randomCount')
  return 10;
}

function StateHook() {
  const [count, setCount] = React.useState(randomCount); //  React.useState(10);

  function increment() {
    // auto batching
    // callback funtion in js
    // updater function in react
    // setCount(function() {}); // syntax: regular function
    setCount((prevState) => prevState + 1); // syntax: arrow function
    setCount((prevState) => prevState + 1); // syntax: arrow function
    setCount((prevState) => prevState + 1); // syntax: arrow function
  }

  console.log('StateHook: ', count)


  return (
    <div>
      <h1>StateHook</h1>
      Count: {count}
      <br />
      <BasicButton 
        text="Update increment"
        onClick={increment}
      />
    </div>
  )
}

export default StateHook