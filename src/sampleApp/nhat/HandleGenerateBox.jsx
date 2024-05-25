import { useState } from "react";
import BoxList from "../../components/BoxList";
import NhatGenerateBox from "./NhatGenerateBox";

export default function HandleGenerateBox(){
    const [numBoxes, setNumBoxes] = useState(0);
    const [boxes, setBoxes] = useState([]);

    function handleChangeColor(boxId) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        const boxIndex = boxes.findIndex(box => box.id === boxId);
        if(boxIndex === -1) return;

        const cloneBoxes = [...boxes];
        cloneBoxes[boxIndex].bgColor = `#${randomColor}`;
        setBoxes(cloneBoxes);
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        if (!numBoxes || numBoxes === 0) return; // clean code -> return early

        const newBoxes = [];
        for (let i = 0; i < numBoxes; i++) {
            const boxItem = {
                id: Math.floor(Math.random() * 300 + i),
                text: `Box ${i + 1}`,
                bgColor: '#cccccc'
            }
            newBoxes.push(boxItem)
        }
        setBoxes(newBoxes);
    }

    return (
        <>
            <NhatGenerateBox 
                boxes={boxes} 
                setNumBoxes={setNumBoxes} 
                onHandleSubmit={handleSubmit}
            />
            <BoxList 
                boxes={boxes} 
                boxesLength={boxes.length} 
                handleChangeColor={handleChangeColor}
            />
        </>
    )
}