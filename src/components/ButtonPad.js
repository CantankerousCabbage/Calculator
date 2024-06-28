import React from "react";
import Button from './Button';

import "../styles/buttons.css";

const ButtonPad = ({ append, edit, calculate}) => {
    return (
        <div className="button-cont">
            <Button id={"b1"} char={"bracketL"} operation={append} />
            <Button id={"b2"} char={"bracketR"} operation={append} />
            <Button id={"b3"} char={"clear all"} operation={edit} />
            <Button id={"b4"} char={"backspace"} operation={edit} />
            <Button id={"b5"} char={"factor"} operation={edit} />
            <Button id={"b6"} char={"square"} operation={append} />
            <Button id={"b7"} char={"square root"} operation={append} />
            <Button id={"b8"} char={"divide"} operation={append} />
            <Button id={"b9"} char={"7"} operation={append} />
            <Button id={"b10"} char={"8"} operation={append} />
            <Button id={"b11"} char={"9"} operation={append} />
            <Button id={"b12"} char={"*"} operation={append} />
            <Button id={"b13"} char={"4"} operation={append} />
            <Button id={"b14"} char={"5"} operation={append} />
            <Button id={"b15"} char={"6"} operation={append} />
            <Button id={"b16"} char={"-"} operation={append} />
            <Button id={"b17"} char={"1"} operation={append} />
            <Button id={"b18"} char={"2"} operation={append} />
            <Button id={"b19"} char={"3"} operation={append} />
            <Button id={"b20"} char={"+"} operation={append} />
            <Button id={"b21"} char={"flip"} operation={append} />
            <Button id={"b22"} char={"0"} operation={append} />
            <Button id={"b23"} char={"."} operation={append} />
            <Button id={"b24"} char={"="} operation={calculate} />
        </div>
    )
}

export default ButtonPad;