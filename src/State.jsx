import React from 'react'

/*
first render
re-render (next render)

so sánh tham trị:  so sánh các giá trị vs nhau 
primitive type:
- number, string, boolean, null, undefiend
eg: const a = 10, b = 12 -> a === b -> false

so sánh tham chiếu: so sánh các vùng nhớ vs nhau
non-primitive type: object, function, array
eg: const objA = {}; objB = {} -> objA === objB -> false

*/
function State() {
  const [count, setCount] = React.useState(1);
  const [firstName, setFirstName] = React.useState('');
  const [messageObj, setMessageObj] = React.useState({
    name: 'tony',
    age: 18,
    book: {
      author: 'react',
      id: 1
    }
  }); // memoryA

  console.log('State: ', messageObj)

  function incrementCount() {
    // automatic batching
    // setCount(1); // 1

    // callback function in setState (updater function)
    setCount((prevState) => {
      return prevState + 1;
    })
    // setFirstName(`Tony ${Date.now()}`)
  }

  return (
    <div>
      <h1>State</h1>
      Count: {count} <br />
      First Name: {firstName} <br />
      <br />
      <button 
        type="button" 
        onClick={incrementCount}
      >
        Increment
      </button>

      <h3>merge & replace object</h3>
      Name: {messageObj.name}< br />
      Age message: {messageObj.age}
      <br />
      <button 
        type="button" 
        onClick={() => {
          // create new object (new memory)
          // const newMessage = {
          //   ...messageObj, // copy all property
          //   name: `Tony ${Date.now()}`,
          //   book: {
          //     ...messageObj.book,
          //     author: `React ${Date.now()}`,
          //   }
          // }
          // setMessageObj(newMessage); // new memory

          setMessageObj((prevState) => {
            console.log('prevState: ', prevState)
            return {  
              ...prevState,
              name: `Tony ${Date.now()}`,
              book: {
                ...prevState.book,
                author: `React ${Date.now()}`,
              }
            }
          })
        }}
      >
        Update nested object
      </button>
    </div>
  )
}

export default State