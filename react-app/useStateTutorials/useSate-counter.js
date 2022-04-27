import React,{useState} from 'react';
import ReactDom from 'react-dom';
// import {data} from './data';

const UseStateCounter=()=>{
    const [value,setValue] = useState(0);

    return (
       <>
       <h2>counter</h2>
       <h3>{value}</h3>
       <button type='button' onClick={()=> setValue(value+1)}>increment</button>
       <button type='button' onClick={()=> setValue(0)}>reset</button>
       <button type='button' onClick={()=> setValue(value-1)}>decrement</button>
       </>
   )
}

const App = () =>{
    return <React.Fragment>
        <UseStateCounter/>
    </React.Fragment>
}

export default App;