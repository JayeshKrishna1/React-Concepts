import React,{useState} from 'react';
import ReactDom from 'react-dom';
import {data} from './data';


const UseStateArray=()=>{
    const [people,SetPeople] = useState(data);
    const deleteEvent=()=>{
        SetPeople([]);
    }
    const handleEvent=(id)=>{
        const newData = people.filter((people)=> people.id != id);
        SetPeople(newData);
    }
    return (
        <>
        {
            people.map((eachobject)=>{
                const {id,name} = eachobject;
                return (
                    <div key={id}>
                        <h2>{name}</h2>
                        <button type='button' onClick={()=>handleEvent(id)}>clickme</button>
                    </div>
                )
            })
        }
        <button type='button' onClick={()=>deleteEvent()}>clickme</button>
        </>
    )
}

const App = () =>{
    return <React.Fragment>
        <UseStateArray/>
    </React.Fragment>
}

export default App;