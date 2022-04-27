import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
// import {data} from './data';

//useEffect is to add sideEffects ;ike fetching etc., and it is invoked after every re rendering
const UseEffectBasics=()=>{
    const [value,setValue] = useState(0);
    useEffect(()=>{ // we cant condition the hooks but we can condition inside of a callback in hook
        console.log('im called after every re-render')
        if(value > 0){
            document.title = `NewMessages(${value})`;
        }
    })
    console.log("im rendering");
    return (
        <>
        <h2>{value}</h2>
        <button type='button' onClick={()=>setValue(value+1)}>clickme</button>
        </>
    )
}

const App = () =>{
    return <React.Fragment>
        <UseEffectBasics/>
    </React.Fragment>
}

export default App;