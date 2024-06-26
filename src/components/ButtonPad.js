import React from "react";
import Button from './Button';

import "../styles/buttons.css";

const ButtonPad = ({ update, calculate}) => {
    return (
        <div className="button-cont">
            <Button id={"b1"} char={"bracketL"} operation={update} />
            <Button id={"b2"} char={"bracketR"} operation={update} />
            <Button id={"b3"} char={"clear all"} operation={update} />
            <Button id={"b4"} char={"backspace"} operation={update} />
            <Button id={"b5"} char={"factor"} operation={update} />
            <Button id={"b6"} char={"square"} operation={update} />
            <Button id={"b7"} char={"square root"} operation={update} />
            <Button id={"b8"} char={"divide"} operation={update} />
            <Button id={"b9"} char={"7"} operation={update} />
            <Button id={"b10"} char={"8"} operation={update} />
            <Button id={"b11"} char={"9"} operation={update} />
            <Button id={"b12"} char={"*"} operation={update} />
            <Button id={"b13"} char={"4"} operation={update} />
            <Button id={"b14"} char={"5"} operation={update} />
            <Button id={"b15"} char={"6"} operation={update} />
            <Button id={"b16"} char={"-"} operation={update} />
            <Button id={"b17"} char={"1"} operation={update} />
            <Button id={"b18"} char={"2"} operation={update} />
            <Button id={"b19"} char={"3"} operation={update} />
            <Button id={"b20"} char={"+"} operation={update} />
            <Button id={"b21"} char={"flip"} operation={update} />
            <Button id={"b22"} char={"0"} operation={update} />
            <Button id={"b23"} char={"."} operation={update} />
            <Button id={"b24"} char={"="} operation={calculate} />
        </div>
    )
}

export default ButtonPad;