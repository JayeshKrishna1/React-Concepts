import React,{useState,useRef,useEffect} from 'react';
import ReactDom from 'react-dom';
import Model from './model';
import {data} from './data';
const UseReducerUseStateSetup=()=>{
    const [people,setPeople] = useState(data);
    const [name,setName] = useState('');
    const [showModel,setShowModel] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name){
            setShowModel(true);
            setPeople([...people,{id : new Date().getTime().toString(),name : name}]);     
            console.log(people);   // it prints empty array becoz the value of people will be updated only when setPeople method runs.
        // before the setPeople method runs this log(people) runs. at the time the array people is empty. 
        }
        else{
            setShowModel(false);
        }
    }
    return(
        <>
        {showModel && <Model/>}
        <form onSubmit = {(e)=> handleSubmit(e)}>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)}></input>
             <button type='submit'>click me to add</button>
        </form>
        {people.map((eachPeople)=>{
            const {id,name} = eachPeople;
            return <div key={id}>
                <h4>{name}</h4>
            </div>
        })}
        </>
    )
}

const App = () =>{
    return (<React.Fragment> 
        <UseReducerUseStateSetup/>
    </React.Fragment>)
}

export default App;