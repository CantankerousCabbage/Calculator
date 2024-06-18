import React from "react";

import { fetchCharacter } from "../logic/operations";

const Button = ({ id,  char, operation}) => {

    return (
        <button id={id} className="button-base" onClick={() => {return operation}}>
            {fetchCharacter(char)}
        </button>
    )
}

export default Button;