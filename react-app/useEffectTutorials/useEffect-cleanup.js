import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
// import {data} from './data';

//useEffect is to add sideEffects ;ike fetching etc., and it is invoked after every re rendering
//cleanup cleans the memory once the event is completed
const UseEffectCleanup=()=>{
    const checkSize=()=>{
        console.log('function');
        setSize(window.innerWidth);
    }
    const [size,setSize] = useState(window.innerWidth);
    useEffect(()=>{
        console.log('re render');
        window.addEventListener('resize',checkSize);
        return (()=>{
            window.removeEventListener('resize',checkSize);
        })
    })
    console.log('render');
    return (
        <>
        <h2>window Size</h2>
        <h3>{size} PX</h3>
        </>
    )
}

const App = () =>{
    return <React.Fragment>
        <UseEffectCleanup/>
    </React.Fragment>
}

export default App;