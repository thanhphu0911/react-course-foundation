/*
function component react
react function component
component react

Notes: must be capitalized with the name of the component

ALT image (alternative text)
- description of the image if the image is not displayed
- using by SEO (Search Engine Optimization)
- using by screen reader (for blind people)
*/

function Product() {
  return (
    <div>
      Product name: tony
    </div>
  )
}

function TestFragment() {
  return (
    <>
      <div>test fragment</div>
      <div>test fragment</div>
    </>
  )
}

function ReactJSX() {
  const sum = 2 + 3;
  const user = {
    first_name: 'tony',
    last_name: 'stark',
    avatar: 'https://via.placeholder.com/150/92c952'
  }

  const renderButton = (
    <button type="button">test render</button>
  )
  
  function renderTyphography() {
    return (
      <div>test render with function</div>
    )
  }

  // JSX
  return (
    <>
      <h1>JSX</h1>
      {sum}

      <h4>expression</h4>
      {2 * 6} <br /> <br />

      <h4>Render with variable</h4>
      {renderButton}

      <h4>Render with function</h4>
      {renderTyphography()}

      <h4>Render with react component</h4>
      <Product />

      <h4>Render with  empty element</h4>
      <br />
      <div />

      <h4>Render with Fragment</h4>
      <TestFragment />

      <h4>Binding Data</h4>
      First Name: {user.first_name} <br />
      Avatar: <img width={40} src={user.avatar} title="" alt="this is avatar of user" />
    </>
  )
}

export default ReactJSX
