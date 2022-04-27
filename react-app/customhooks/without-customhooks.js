import React,{useState,useRef,useEffect,useReducer,useContext} from 'react';
import ReactDom from 'react-dom';
// import {data} from './data';
const url = 'https://api.github.com/users';
const CustomHooks=()=>{
    const [loading,setLoading] = useState(true);
    const getItems=()=>{
        fetch(url).then(res => res.json()).then(()=> {
            setLoading(false);
        })
    }
    useEffect(()=>{
        getItems();
    },[])
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