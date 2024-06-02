/* eslint-disable react/prop-types */
import Box from "./Box";

function BoxList({ displayBoxes }) {
  return (
    <>
      {displayBoxes.length > 0 ? (
        <ul className="duy-boxList">
          {displayBoxes.map((number, index) => {
            return <Box key={index} number={number} />;
          })}
        </ul>
      ) : (
        <p>No Box!</p>
      )}
    </>
  );
}

export default BoxList;
