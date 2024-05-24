import { useState } from 'react';

function BoxGenerator() {
  const [numBoxes, setNumBoxes] = useState(0);
  const [boxes, setBoxes] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleGenerate = () => {
    if (numBoxes === 0) {
      setBoxes([]);
      return;
    }

    const newBoxes = [];
    for (let i = 1; i <= numBoxes; i++) {
      newBoxes.push(
        <div
          key={i}
          style={{
            backgroundColor: backgroundColor,
            padding: 20,
            margin: 10,
            textAlign: 'center',
            color: 'white'
          }}
        >
          Box #{i}
        </div>
      );
    }
    setBoxes(newBoxes);
  };

  const handleToggleBackground = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };

  return (
    <div>
      <label>Number of boxes:</label>
      <input
        type="number"
        min="1"
        max="128"
        value={numBoxes}
        onChange={(e) => setNumBoxes(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate</button>
      {boxes.length > 0 && (
        <div>
          {boxes}
          <button onClick={handleToggleBackground}>Toggle Background</button>
        </div>
      )}
      {numBoxes === 0 && <p>No box</p>}
    </div>
  );
}

export default BoxGenerator;