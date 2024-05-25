import { useState } from "react";
import BoxList from "../../components/BoxList";
import NhatGenerateBox from "./NhatGenerateBox";
import "./style.css";

export default function HandleGenerateBox(){
    const [numBoxes, setNumBoxes] = useState(0);
    const [boxes, setBoxes] = useState(['']);
    const [changeColor, setChangeColor] = useState("#cccccc");

    function handleChangeColor() {
    const randomColor = "#" + Math.random().toString(16).slice(2, 8);
    setChangeColor((changeColor) => (changeColor = randomColor));
    console.log("color: " + changeColor);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!numBoxes || numBoxes === 0) return;
        console.log("boxes",boxes);
        const newBoxes = [];
        for (var i =1; i <= numBoxes; i++){
            newBoxes.push(
                <ul>
                    <li className="divBox"
                    key={i}
                    style={{backgroundColor: `${changeColor}`}}
                    onClick={handleChangeColor}
                    >
                        Box #{i}
                    </li>
                </ul>
                

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