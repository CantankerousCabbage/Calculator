import React from "react";

import { fetchCharacter } from "../logic/operations";

const Button = ({ id,  char, operation}) => {

    const handleClick = ( event ) => {
        event.stopPropagation();

        operation(event);
    }
    return (
        <button id={id} className="button-base" value={char} onClick={handleClick}>
            {fetchCharacter(char)}
        </button>
    )
}

export default Button;