import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
const FormBasics=()=>{
    const handleEvent=(e)=>{
        e.preventDefault();
        console.log('hi jayesh');
    }
    return (
        <>
        <article>
            <form onSubmit={(e) => handleEvent(e)}>
            <div>
                <label htmlFor='firstName'>Name : </label>
                <input type='text' id='firstName' name='firstName'></input>
            </div>
            <div>
                <label htmlFor='email'>Email : </label>
                <input type='text' id='email' name='email'></input>
            </div>
            <button type='submit'>add person</button>
            </form>
        </article>
        </>
    )
}

const App = () =>{
    return <React.Fragment>
        <FormBasics/>
    </React.Fragment>
}

export default App;