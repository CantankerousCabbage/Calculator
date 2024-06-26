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
        // console.log("yes");
        if(currentOperation.operation){
            let result = currentOperation.operation(display);
            setDisplay(result);
        }
    }

    const editDisplay = ( event ) => {
        const value = event.target.getAttribute("value");
        let operation = fetchCallback(value);

        let temp = operation(display);
        setDisplay(temp);
    }

    const appendDisplay = ( event ) => {

        //No inherent value property on buttons (forms only)
        const value = event.target.getAttribute("value");
        let temp = display;
        
        //If number entered else operation
        if(!isNaN(Number(value))){
            
            if(temp === 0){
                temp = value;
            } else {
                temp = temp + value;
            }
            
        } else {
            

            if(temp !==  0 && value !== currentOperation.symbol){
                temp =  temp + ` ${value} `;
                setOperation({ symbol: value, operation: fetchCallback(value)})
            }
        }
       
        setDisplay(temp);
    }

    return (
        <div className="chassis-frame">
            <Screen display={display}/>
            <ButtonPad append={appendDisplay} edit={editDisplay} calculate={calculate}/>
        </div>
    )
}

export default Chassis