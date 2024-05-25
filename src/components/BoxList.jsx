 // eslint-disable-next-line react/prop-types
 function BoxList({boxes, boxesLength, handleChangeColor}){
    
    return (
        <>
            <h2>This is my box list</h2>
            
            <div style={{ marginTop: 20, width: '50%'}}>
                <ul>
                    {boxesLength > 0 ? (
                        <>
                            {boxes.map((box, boxIndex) => {
                                return (
                                    <li 
                                        key={box.id}
                                        className="divBox"
                                        style={{ backgroundColor: box.bgColor }}
                                        onClick={() => handleChangeColor(box.id)}
                                    >
                                        Box #{boxIndex + 1}
                                    </li>
                                )
                            })}
                        </>
                    ) : (
                        <div>No box</div>
                    )}
                </ul>
            </div>
        </>
    );
}
export default BoxList;