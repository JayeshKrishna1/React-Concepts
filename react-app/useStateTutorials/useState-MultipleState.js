import React,{useState} from 'react';
import ReactDom from 'react-dom';
// import {data} from './data';

const data = {
    name: 'Jayesh',
    age : 20,
    message : 'Im codm addict'
}

const UseStateObject=()=>{
   const [name,setName] = useState('Jayesh');
   const [age,setAge] = useState(24);
   const [message,setMessage] = useState('Im codm addict');
   const handleEvent=()=>{
       setName('Krishna');
       setAge(21);
        setMessage( 'Im apexm addict');
}
   return (
       <>
       <h2>{name}</h2>
       <h2>{age}</h2>
       <h2>{message}</h2>
       <button type='button' onClick={() => handleEvent()}>clickme</button>
       </>
   )
}

const App = () =>{
    return <React.Fragment>
        <UseStateObject/>
    </React.Fragment>
}

export default App;