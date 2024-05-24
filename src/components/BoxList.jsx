 // eslint-disable-next-line react/prop-types
 function BoxList({boxes, boxesLength}){
    // {
    //     var boxArr = Array.from({length: {boxes}}, ( _, i) => i + 1);
    // }
    return (
        <>
            <h2>This is my box list</h2>
            {/* <ul>
                {boxArr.length > 0
                 ? boxArr.map((number) => {
                    return <li  key={number.id} className="box">box #{number}</li>;
                 })
                 : null               
                }
            </ul> */}
            <div style={{ marginTop: 20 }}>
            {boxesLength > 0 ? boxes : <div>No box</div>}
      </div>
        </>
    );
}
export default BoxList;