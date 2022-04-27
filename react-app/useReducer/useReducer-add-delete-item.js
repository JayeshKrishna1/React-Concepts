import React,{useState,useRef,useEffect,useReducer} from 'react';
import ReactDom from 'react-dom';
import Model from './model';
import {data} from './data';
import {reducer} from './reducer'
const defaultState={
    people : [],
    isModel : false,
    modelContent : ''
}
const UseReducerUseStateSetup=()=>{
    const [name,setName] = useState('');
    const [state,dispatch] = useReducer(reducer,defaultState);
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name){
            const newItem = {id : new Date().getTime().toString(),name : name};
            dispatch({type : 'ADD_ITEM', payload : newItem});

        }
        else{
            dispatch({type : 'NO_ITEM'});  
        }
    }
    const closeModel = ()=>{
        dispatch({type:'CLOSE_MODEL'});
    }
    return(
        <>
        {state.isModel && <Model closeModel={closeModel} modelContent={state.modelContent}/>}
        <form onSubmit = {(e)=> handleSubmit(e)}>
            <input type='text' value={name} onChange={(e)=> setName(e.target.value)}></input>
             <button type='submit'>click me to add</button>
        </form>
        {state.people.map((eachPeople)=>{
            const {id,name} = eachPeople;
            return <div key={id}>
                <h4>{name}</h4>
                <button type='button' onClick={()=> dispatch({type : 'REMOVE_ITEM',payload : id})}>click to remove</button>
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