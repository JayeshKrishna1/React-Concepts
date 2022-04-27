import React,{useState} from 'react';
import ReactDom from 'react-dom';
// import {data} from './data';

const data = {
    name: 'Jayesh',
    age : 20,
    message : 'Im codm addict'
}

const UseStateObject=()=>{
   const [people,setPeople] = useState(data);
   const {name,age,message} = people;
   const handleEvent=()=>{
    setPeople({...data, message : 'Im apexm addict'})
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