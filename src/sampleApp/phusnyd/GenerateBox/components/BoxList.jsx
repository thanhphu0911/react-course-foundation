import { useState } from "react";

function BoxList({ showBoxes }) {
  var numberArr = Array.from({ length: showBoxes }, (_, i) => i + 1);
  const [changeColor, setChangeColor] = useState("#fffff");
  function handleChangeColor() {
    const randomColor = "#" + Math.random().toString(16).slice(2, 8);
    setChangeColor((preState) => (preState = randomColor));
    console.log("color: ", changeColor);
  }

  return (
    <>
      {showBoxes ? (
        <ul className="boxList">
          {numberArr.length > 0 ? (
            numberArr.map((number, index) => {
              return (
                <li
                  key={index}
                  style={{ backgroundColor: `${changeColor}` }}
                  className="box"
                  onClick={handleChangeColor}
                >
                  box #{number}
                </li>
              );
            })
          ) : (
            <p>Nothing in Array</p>
          )}
        </ul>
      ) : (
        <p>No Box!</p>
      )}
    </>
  );
}

export default BoxList;
