import React, { useState} from 'react';

import Screen from './Screen';
import ButtonPad from './ButtonPad';

import { fetchCallback } from '../logic/operations';

import '../styles/chassis.css';

const NUMBER = "number";
const OPERATION = "operation";

const Chassis = () => {

    const [display, setDisplay] = useState(0);
    const [type, setType] = useState(null); 
    const [currentOperation, setOperation] = useState( {symbol: null, operation: null} );


    const calculate = () => {
        console.log("yes");
        if(currentOperation.operation){
            let result = currentOperation.operation(display);
            setDisplay(result);
        }
    }

    const appendDisplay = ( event ) => {

        //No inherent value property on buttons (forms only)
        const value = event.target.getAttribute("value");
        let temp = display;
        
        if(!isNaN(Number(value))){
            console.log("yes");
            temp = (temp === 0) ? value: temp + value;
        } else {
            if(value !== currentOperation.symbol){
                temp =  temp + ` ${value} `;
                setOperation({ symbol: value, operation: fetchCallback(value)})
            }
        }
        //Concat if number otherwise concat with space if not same op.
        // temp = (typeof value === 'number') ? temp + value : (value === currentOperation) ? 
        // temp : temp + ` ${value} `;
        setDisplay(temp);
    }

    return (
        <div className="chassis-frame">
            <Screen display={display}/>
            <ButtonPad update={appendDisplay} calculate={calculate}/>
        </div>
    )
}

export default Chassis