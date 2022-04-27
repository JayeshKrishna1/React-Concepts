import React,{useState,useRef,useEffect,useReducer,useContext} from 'react';
import ReactDom from 'react-dom';
import {data} from './data';

const PeopleContext = React.createContext();//cretae the context named PeopleContext with 2 components in it Provider as root,Consumer
// this context wraps the whole app or bunch of components
//we have access to two components - Provider,Consumer
// by using this we dont need to use props which needs to be do till the end of a component tree
const ContextAPI=()=>{
    const removeItem=(id)=>{
        const newPeople  = people.filter((eachPerson)=> eachPerson.id !== id);
        console.log(newPeople);
        return SetPeople(newPeople);
    }// we need this function only in SinglePerson component but we need to pass this as props in before components to acess it
    //this is called prop drilling and can be solved by use of useContext
    const [people,SetPeople] = useState(data);
    return (
    <PeopleContext.Provider value={{removeItem,people}}> {/* must be on root component of app and value contains anything that must be accessed by all nested components*/}
    <List /> 
    {/* we assigning removeItem to removePerson and this is jsx not an object. In list component,the removePerson has the function not the removeItem.  */}
    </PeopleContext.Provider>)
}
const List = ()=>{
    const data = useContext(PeopleContext);
    console.log(data);
    return (
        <>
        {
            data.people.map((person)=>{
                return <SinglePerson key={person.id} {...person} />
            })
        }
        </>
    )
}
const SinglePerson = ({id,name}) =>{
    const {removeItem} = useContext(PeopleContext);
    return (
        <>
        <h4>{name}</h4>
        <button type='button' onClick={()=> removeItem(id)}>click me</button>
        </>
    )
}

const App = () =>{
    return (<React.Fragment> 
        <ContextAPI/>
    </React.Fragment>)
}

export default App;