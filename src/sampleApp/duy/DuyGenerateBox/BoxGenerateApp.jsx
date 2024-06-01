import GenerateInput from "./Components/GenerateInput";
import BoxList from "./Components/BoxList";
import { useState } from "react";

function DuyGenerateBoxApp() {
  const [boxes, setBoxes] = useState(0);
  const [displayBoxes, setDisplayBoxes] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const boxesArray = Array.from({ length: boxes }, (_, i) => i + 1);
    console.log("Number of box: ", boxes);
    console.log(boxesArray);
    setDisplayBoxes(boxesArray);
    console.log(displayBoxes);
    setBoxes(0);
  }

  return (
    <div>
      <GenerateInput
        boxes={boxes}
        onHandleSubmit={handleSubmit}
        setBoxes={setBoxes}
      />
      <BoxList displayBoxes={displayBoxes} />
    </div>
  );
}

export default DuyGenerateBoxApp;
