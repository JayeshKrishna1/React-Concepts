import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
const ShortCircuitEvaluation=()=>{
    const [text,setText] = useState('');
    const firstValue = text || 'Hello Jayesh'; // if text is true(means has value in it) it returns text else it returns the hello jayesh
    const secondValue = text && 'Hello Jayesh Krishna'; // if text is true it returns hello jayesh krishna else it returns the true value 
    // console.log(firstValue,secondValue);
    return (<>
    {text || <h2>text not exsist!!</h2>}
    {text && <h2>text is there</h2>}
    </>)
}

const App = () =>{
    return <React.Fragment>
        <ShortCircuitEvaluation/>
    </React.Fragment>
}

export default App;