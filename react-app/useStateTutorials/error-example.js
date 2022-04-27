import React,{useState} from 'react';
import ReactDom from 'react-dom';

const ErrorExample = () =>{
    let name = 'Jayesh'
    const errorExample = ()=> {
        let name = 'Jayesh Krishna K';
        console.log(name);
    }
    return (
        <>
        <h2>{name}</h2>
        <button type='buttton' onClick={() => errorExample()}>click me</button>
        </>
    );
}

export default ErrorExample;