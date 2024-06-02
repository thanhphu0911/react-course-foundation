import React from "react";
function Box({ number }) {
  const [randomColor, setRandomColor] = React.useState("#fffff");

  function handleChangeColor() {
    const randomValue =
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
    setRandomColor((preState) => (preState = randomValue));
    console.log("Color: ", randomColor);
  }
  return (
    <li
      style={{ backgroundColor: `${randomColor}` }}
      className="duy-box"
      onClick={handleChangeColor}
    >
      Box #{number}
    </li>
  );
}

export default Box;
