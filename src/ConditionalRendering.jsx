import React from 'react'
import BasicButton from './components/BasicButton';

/*
 &&: trái, phải
  - nếu trái is true -> nó sẽ lấy vế phải
  - nếu trái is false -> nó sẽ lấy false
  Eg:
    - true && 'tony' -> 'tony'
    - 'tony' && true -> true
    - 'duy' && 'nhat' -> true && 'nhat' -> 'nhat'
    - nums && nums.length > 0 && 'tony' -> 'tony'

||: or
 - thằng nào true -> lấy true
 Eg:
  - 'tony' || true -> 'tony'
  - false || 'tony' || 'nhat' -> 'tony'
  - numbs = [] -> nums.length === 0 || ['tony']
*/

function LoginButton() {
  return (
    <div>Login button</div>
  )
}

function LogoutButton() {
  return (
    <div>Logout button</div>
  )
}


function ConditionalRendering() {
  const [users, setUsers] = React.useState(null);
  let button = <LoginButton />

  if(users && users.length > 0) {
    button = <LogoutButton />
  }

  console.log('users: ', users)
  function testUser() {
    setUsers(['tony'])
  }

  function renderText() {
    return (
      <div>test function conditional</div>
    )
  }

  return (
    <div>
      <h1>ConditionalRendering</h1>

      <h4> && </h4>
      <BasicButton text="Test User" onClick={testUser} />
      <br />
      {Array.isArray(users) && users.map(user => {
        return (
          <div>user</div>
        )
      })}

      <br />

      <h4>||</h4>
      {users || <div>please click test user</div>}

      <br />
      <h4>ternary operator</h4>
      {users ? <div>user has logined</div> : <div>please login user</div>}

      <br />
      <h4>Element variable</h4>
      {button}

      <br />
      <h4>Function variable</h4>
      {Array.isArray(users) && renderText()}
      
    </div>
  )
}

export default ConditionalRendering

/*
 chain ternary operator
if condition1 ? value1
  : conition2 ? value2
  : condition3 ? value3
  : value4
/*/