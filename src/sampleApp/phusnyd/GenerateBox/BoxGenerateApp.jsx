import BoxList from "./components/BoxList";
import GenerateBox from "./components/GenerateBox";
import { useState } from "react";

function BoxGenerateApp() {
  const [boxes, setBoxes] = useState("");
  const [showBoxes, setShowBoxes] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    setShowBoxes((prevState) => (prevState = boxes));
    setBoxes("");
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
