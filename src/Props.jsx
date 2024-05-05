import React from 'react'

/* Props
- pass parenet component to child component
- pair key: value
  - key: name of property
  - value: any value that valid javascript

destructuring object
const firstName  = user.firstName; // es5
const { firstName } = user; // es6

// spread operator: dàn trải các property
// rest operator: get remains properties

keyword: children function
*/

function SpreadFunc(props) {
  console.log("Spread func: ", props)
  return (
    <div>
      This is test spread operator <br />
    </div>
  )
}

function Welcome({ firstName, age, size = 'small', children, component, component2: Component2, ...restProps }) {
  console.log('rest operator: ', {
    component,
    Component2,
    restProps
  })
  return (
    <div>
      This is my welcome <br />
      First Name: {firstName} <br />
      Age: {age} <br />
      Size: {size} <br />
      This is children: {children} <br />
      Demo with props is react component 1: {component} <br />
      Demo with props is react component 2: <Component2 />
    </div>
  )
}

function Props() {
  const user = {
    firstName: 'tony',
    age: 18,
    person: {
      author: 'stack'
    },
    color: ['red', 'yellow', 'black'],
    size: "large",
    isMale: true
  }
  return (
    <div>
      <h1>Props</h1>
      <h3>Spread operator</h3>
      <SpreadFunc {...user} />
      <h3>This is all props types</h3>
      <Welcome 
        firstName={user.firstName} // string
        age={user.age} // number
        isMale={user.isMale} // boolean
        person={user.person} // object
        colors={user.color} // array
        size={user.size}
        onClick={() => {}}
        component={<SpreadFunc />}
        component2={SpreadFunc}
      >
        same with slot parking car
      </Welcome>

    </div>
  )
}

export default Props