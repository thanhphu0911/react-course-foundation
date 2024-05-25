 // eslint-disable-next-line react/prop-types
 function BoxList({boxes, boxesLength}){
    
    return (
        <>
            <h2>This is my box list</h2>
            
            <div style={{ marginTop: 20, width: '50%'}}>
            {boxesLength > 0 ? boxes : <div>No box</div>}
      </div>
        </>
    );
}
export default BoxList;