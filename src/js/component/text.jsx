import React, {useEffect, useState} from "react";

let Text  = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log("COMPENENT MOUNTED");

        return () => {
            console.log("COMPONENT UNMOUNTED");
        }
    }, [])

    return (
        <>
            <input 
            type="text"
                onChange={event => {
                setText(event.target.value)
                }}
                value={text}
            ></input>
            <h1>{text}</h1>
        </>
    );
};

export default Text;