import { useState } from "react";
import BoxList from "../../components/BoxList";
import NhatGenerateBox from "./NhatGenerateBox";
import "./style.css";

export default function HandleGenerateBox(){
    const [numBoxes, setNumBoxes] = useState(0);
    const [boxes, setBoxes] = useState(['']);
    function handleSubmit(e) {
        e.preventDefault();
        if (!numBoxes || numBoxes === 0) return;
        console.log("boxes",boxes);
        //setBoxes(prevState => e.target.value);
        const newBoxes = [];
        for (var i =1; i <= numBoxes; i++){
            newBoxes.push(
                <div className="divBox"
                    key={i}
                    style={{
                        // eslint-disable-next-line no-undef
                        backgroundColor: "green",
                        padding: 20,
                        margin: 10,
                        textAlign: "center",
                        textColor: "black",
                    }} 
                    >
                        Box #{i}
                    </div>

            );
            setBoxes(newBoxes);
        }
    }
    return (
        <>
        <NhatGenerateBox boxes={boxes} setNumBoxes={setNumBoxes} onHandleSubmit={handleSubmit}/>
        <BoxList boxes={boxes} boxesLength={boxes.length} />
        </>
    )
}