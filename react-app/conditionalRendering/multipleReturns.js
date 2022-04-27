import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
const MultipleReturns=()=>{
    // if both returns are there it will return the first one
    //conditional return
    const [loading,setLoading] = useState(true);
    if(loading){
        return <h2>Laoding...</h2>
    }
    return <h2>Not Loading</h2>
}

const App = () =>{
    return <React.Fragment>
        <MultipleReturns/>
    </React.Fragment>
}

export default App;