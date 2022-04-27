import React,{useState,useRef,useEffect,useReducer} from 'react';
import ReactDom from 'react-dom';
import {data} from './data';

const PropDrilling=()=>{
    const removeItem=(id)=>{
        const newPeople  = people.filter((eachPerson)=> eachPerson.id !== id);
        console.log(newPeople);
        return SetPeople(newPeople);
    }// we need this function only in SinglePerson component but we need to pass this as props in before components to acess it
    //this is called prop drilling and can be solved by use of useContext
    const [people,SetPeople] = useState(data);
    return (
    <>
    <List people={people} removePerson={removeItem}/>
    {/* we assigning removeItem to removePerson and this is jsx not an object. In list component,the removePerson has the function not the removeItem.  */}
    </>)
}
const List = ({people,removePerson})=>{
    console.log(removePerson);
    return (
        <>
        {
            people.map((person)=>{
                return <SinglePerson key={person.id} {...person} removeP={removePerson}/>
            })
        }
        </>
    )
}
const SinglePerson = ({id,name,removeP}) =>{
    console.log(removeP);
    return (
        <>
        <h4>{name}</h4>
        <button type='button' onClick={()=> removeP(id)}>click me</button>
        </>
    )
}

const App = () =>{
    return (<React.Fragment> 
        <PropDrilling/>
    </React.Fragment>)
}

export default App;