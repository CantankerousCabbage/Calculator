import React from "react";
import Button from './Button';

import "../styles/buttons.css";

const ButtonPad = () => {
    return (
        <div className="button-cont">
            <Button id={"b1"} char={"percent"} operation={""} />
            <Button id={"b2"} char={"clear entry"} operation={""} />
            <Button id={"b3"} char={"clear all"} operation={""} />
            <Button id={"b4"} char={"clear digit"} operation={""} />
            <Button id={"b5"} char={"factor"} operation={""} />
            <Button id={"b6"} char={"square"} operation={""} />
            <Button id={"b7"} char={"square root"} operation={""} />
            <Button id={"b8"} char={"divide"} operation={""} />
            <Button id={"b9"} char={"7"} operation={""} />
            <Button id={"b10"} char={"8"} operation={""} />
            <Button id={"b11"} char={"9"} operation={""} />
            <Button id={"b12"} char={"*"} operation={""} />
            <Button id={"b13"} char={"4"} operation={""} />
            <Button id={"b14"} char={"5"} operation={""} />
            <Button id={"b15"} char={"6"} operation={""} />
            <Button id={"b16"} char={"-"} operation={""} />
            <Button id={"b17"} char={"1"} operation={""} />
            <Button id={"b18"} char={"2"} operation={""} />
            <Button id={"b19"} char={"3"} operation={""} />
            <Button id={"b20"} char={"+"} operation={""} />
            <Button id={"b21"} char={"flip"} operation={""} />
            <Button id={"b22"} char={"0"} operation={""} />
            <Button id={"b23"} char={"."} operation={""} />
            <Button id={"b24"} char={"="} operation={""} />
        </div>
    )
}

export default ButtonPad;