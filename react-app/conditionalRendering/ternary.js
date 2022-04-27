import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
const ShortCircuitEvaluation=()=>{
    const [isError,setIsError] = useState(false);
    // const firstValue = text || 'Hello Jayesh'; // if text is true(means has value in it) it returns text else it returns the hello jayesh
    // const secondValue = text && 'Hello Jayesh Krishna'; // if text is true it returns hello jayesh krishna else it returns the true value 
    // console.log(firstValue,secondValue);
    return (<>
    <h2>short Circuit and ternary operator</h2>
    <button type='button' onClick={()=> setIsError(!isError)}>Click me for short circuit</button>
    <button type='button' onClick={()=> setIsError(!isError)}>click me for ternary</button>
    {/* {text || <h2>text not exsist!!</h2>} */}
    {isError && <h2>there is an error!!!</h2>}
    {isError ? <h2>there is error!!</h2> : <h2>there is no error! U can proceed....</h2>}
    </>)
}

const App = () =>{
    return <React.Fragment>
        <ShortCircuitEvaluation/>
    </React.Fragment>
}

export default App;