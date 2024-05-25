// eslint-disable-next-line react/prop-types
export default function NhatGenerateBox ({ numBoxes, setNumBoxes, onHandleSubmit}){

    return (
        <>
        <form onSubmit={onHandleSubmit}>
            <h2>Number of boxes to generate.</h2>
            <input type="number"
                    min="1"
                    max="128"
                    value={numBoxes}
                    onChange={ (e) => setNumBoxes(Number(e.target.value))}
            />
            <button onClick={onHandleSubmit}>Generate</button>

        </form>
        </>
    );
}