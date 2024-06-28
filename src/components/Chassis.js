import React, { useState} from 'react';

import Screen from './Screen';
import ButtonPad from './ButtonPad';

import { fetchCallback } from '../logic/operations';

import '../styles/chassis.css';

const NUMBER = "number";
const OPERATION = "operation";

const Chassis = () => {

    const [display, setDisplay] = useState(0);
    const [result, setResult] = useState(false); 
    const [currentOperation, setOperation] = useState( {symbol: null, operation: null} );


    const calculate = ( event ) => {
        let result;

        if(currentOperation.operation){
            //Handle operations on the basis of "="
            result = currentOperation.operation(display);
            setDisplay(String(result));

        } else if( event !== null) {
            //Handle single number operations
            const value = event.target.getAttribute("value");
            let operation = fetchCallback(value);
            result = operation(display);

            setOperation({ symbol: value, operation: operation});
            setDisplay(String(result));  
        }

        //Flag that current display is a result
        setResult(true);
    }

    const editDisplay = ( event ) => {
        const value = event.target.getAttribute("value");
        let operation = fetchCallback(value);

        let temp = operation(display);
        setDisplay(temp);
    }

    const appendDisplay = ( event ) => {
        console.log(event);
        //No inherent value property on buttons (forms only)
        const value = event.target.getAttribute("value");
        let temp = display;
        
        //If number entered else operation
        if(!isNaN(Number(value))){
            
            if(temp === 0 || result){
                temp = value;
                
                //Result replaced with new entry so flip result flag.
                setResult(false);
            } else {
                temp = temp + value;
                console.log("maintain");
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