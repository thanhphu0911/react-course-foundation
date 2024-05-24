function GenerateBox({ boxes, setBoxes, onHandleSubmit }) {
  return (
    <form onSubmit={onHandleSubmit}>
      <h1>Sample App - GenerateBox</h1>
      <div>Number of boxes</div>
      <input
        type="number"
        value={boxes}
        onChange={(e) => setBoxes(Number(e.target.value))}
      />
      <button>Generate</button>
    </form>
  );
}

export default GenerateBox;
