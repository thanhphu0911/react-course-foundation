function GenerateInput({boxes, setBoxes, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Number of boxes:</h2>
      <input 
        type="number" 
        value={boxes}
        onChange={(e) => setBoxes(Number(e.target.value))}
      />
      <button onClick={handleSubmit}>Generate</button>
    </form>
  );
}
export default GenerateInput;
