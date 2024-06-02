/* eslint-disable react/prop-types */
function GenerateInput({ boxes, setBoxes, onHandleSubmit }) {
  return (
    <form onSubmit={onHandleSubmit}>
      <h2>Number of boxes:</h2>
      <input
        type="number"
        value={boxes}
        onChange={(e) => setBoxes(Number(e.target.value))}
      />
      <button>Generate</button>
    </form>
  );
}
export default GenerateInput;
