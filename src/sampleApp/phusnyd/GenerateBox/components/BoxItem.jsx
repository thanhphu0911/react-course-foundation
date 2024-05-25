import React from 'react'

function BoxItem({ number }) {
  const [changeColor, setChangeColor] = React.useState("#fffff");

  function handleChangeColor() {
    const randomColor = "#" + Math.random().toString(16).slice(2, 8);
    setChangeColor((preState) => (preState = randomColor));
    console.log("color: ", changeColor);
  }

  return (
    <li
      style={{ backgroundColor: `${changeColor}` }}
      className="box"
      onClick={handleChangeColor}
    >
      box #{number}
    </li>
  )
}

export default BoxItem