import React,{useState} from 'react';
import ReactDom from 'react-dom';

const UseStateBasics = () =>{
    console.log(useState('Jayesh'));
    const [text,setText] = useState('Jayesh');
    const UseStateBasics =()=>{
        if(text === 'Jayesh')
        setText('Jayesh Krishna K')
        else
        setText('Jayesh')
    }
    return (
        <>
        <h2>{text}</h2>
        <button type = 'button' onClick={() => UseStateBasics()}>click me</button>
        </>
    )
}

export default UseStateBasics;