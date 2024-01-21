/* eslint-disable no-unused-vars */
import React, { useState } from "react";
/* eslint-enable no-unused-vars */


import './Calc.css'
const Calc = ()=>{
    const[input,setInput]=useState('');

const click = (value)=>{
    setInput((prevInput) => prevInput + value);
};
const clear = ()=>{
    setInput((prevInput)=>'');
};
const calculate = () =>{
    try{
        setInput(eval(input).toString());
    }catch(error){
        setInput('Error');
    }
};

return(
    <div className="Calc">
        <div className="display">{input}</div>
        <div className="buttons">
            <button onClick={()=>click('1')}>1</button>
            <button onClick={()=>click('2')}>2</button>
            <button onClick={()=>click('3')}>3</button>
            <button onClick={()=>click('+')}>+</button>
            <button onClick={()=>click('4')}>4</button>
            <button onClick={()=>click('5')}>5</button>
            <button onClick={()=>click('6')}>6</button>
            <button onClick={()=>click('-')}>-</button>
            <button onClick={()=>click('7')}>7</button>
            <button onClick={()=>click('8')}>8</button>
            <button onClick={()=>click('9')}>9</button>
            <button onClick={()=>click('*')}>*</button>
            <button onClick={()=>click('0')}>0</button>
            <button onClick={clear}>C</button>
            <button onClick={calculate}>=</button>
            <button onClick={()=>click('/')}>/</button>
        </div>
    </div>
);

};


export default Calc;