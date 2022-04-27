import React,{useState,useRef,useEffect} from 'react';
import ReactDom from 'react-dom';
//useRef wont trigger re render
// mostly used to target dom elements using ref attribute
const UserefBasics=()=>{
    const refContainer = useRef(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(refContainer);
        console.log(refContainer.current);
        console.log(refContainer.current.value);
    }
    useEffect(()=>{
        refContainer.current.focus(); // focus the dom part which refcontainer has
    })
    return (<>
    <article>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type='text' ref={refContainer}></input>
            <button type='submit'>clickme</button>
        </form>
    </article>
    </>);
}

const App = () =>{
    return <React.Fragment>
        <UserefBasics/>
    </React.Fragment>
}

export default App;