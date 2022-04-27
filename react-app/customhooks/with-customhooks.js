import React,{useState,useRef,useEffect,useReducer,useContext} from 'react';
import ReactDom from 'react-dom';
// import {data} from './data';

//importing custom hooks
import {useFetch} from './useFetch';
const url = 'https://api.github.com/users';
const CustomHooks=()=>{
    const {loading,users} = useFetch(url);
    console.log(users);
    return(
        <h2>{loading ? 'loading...' : 'we got data'}</h2>
    )
}
const App = () =>{
    return (<React.Fragment> 
        <CustomHooks/>
    </React.Fragment>)
}

export default App;