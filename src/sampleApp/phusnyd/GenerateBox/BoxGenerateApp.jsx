import BoxList from "./components/BoxList";
import GenerateBox from "./components/GenerateBox";
import { useState } from "react";

function BoxGenerateApp() {
  const [boxes, setBoxes] = useState(0);
  const [showBoxes, setShowBoxes] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const boxsArray = Array.from({ length: boxes }, (_, i) => i + 1);
    setShowBoxes(boxsArray);
    setBoxes(0);
  }

  return (
    <div className="App">
      <GenerateBox
        boxes={boxes}
        onHandleSubmit={handleSubmit}
        setBoxes={setBoxes}
      />
      <BoxList showBoxes={showBoxes} />
    </div>
  );
}

export default BoxGenerateApp;
