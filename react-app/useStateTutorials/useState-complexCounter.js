import React,{useState} from 'react';
import ReactDom from 'react-dom';
// import {data} from './data';

const UseStateComplexCounter=()=>{
    const [value,setValue] = useState(0);
    const handleEvent=()=>{
        setTimeout(()=>{
            // setValue(value+1); // on multiple clicks it wont take the new value
            setValue((prevState)=> prevState+1)
        },2000)
    }

    return (
       <>
       <section>
       <h2>counter</h2>
       <h3>{value}</h3>
       <button type='button' onClick={()=> setValue(value+1)}>increment</button>
       <button type='button' onClick={()=> setValue(0)}>reset</button>
       <button type='button' onClick={()=> setValue(value-1)}>decrement</button>
       </section>
       
       <section>
       <h2>Complex counter</h2>
       <h3>{value}</h3>
       <button type='button' onClick={()=> handleEvent()}>increment later</button>
       </section>
       </>
   )
}

const App = () =>{
    return <React.Fragment>
        <UseStateComplexCounter/>
    </React.Fragment>
}

export default App;