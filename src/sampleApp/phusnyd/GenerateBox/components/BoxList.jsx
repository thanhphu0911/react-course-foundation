import { useState } from "react";
import BoxItem from "./BoxItem";

function BoxList({ showBoxes }) {
  return (
    <>
      {showBoxes.length > 0  ? (
        <ul className="boxList">
         {showBoxes.map((number, index) => {
            return (
              <BoxItem 
                key={index}
                number={number}
              />
            );
          })}
        </ul>
      ) : (
        <p>No Box!</p>
      )}
    </>
  );
}

export default BoxList;
