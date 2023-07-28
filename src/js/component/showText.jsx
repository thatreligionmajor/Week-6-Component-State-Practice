import React, { useState } from "react";
import Text from "./text";

const ShowText = () => {
    const[showText, setShowText] = useState(false) 
    return (
        <>
            <div>
                <button onClick={() => setShowText(!showText)}>Toggle text</button>
                <div>
                    {showText && <Text />}
                    {/* if showText is true and Text is not empty */}
                    {/* {console.log(showText)} */}
                </div>
            </div>
        </>  
    );
};

export default ShowText;