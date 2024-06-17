import React from 'react';

import Screen from './Screen';
import ButtonPad from './ButtonPad';

import '../styles/chassis.css';


const Chassis = () => {
    return (
        <div className="chassis-frame">
            <Screen />
            <ButtonPad />
        </div>
    )
}

export default Chassis