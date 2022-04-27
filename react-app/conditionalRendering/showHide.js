import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
const ShowHide=()=>{
    const  [isShow,setIsShow] = useState(false);
    const triggerAnotherComponent=()=>{
        setIsShow(!isShow);
    }
    return (<>
    <button type='button' onClick={()=>triggerAnotherComponent()}>clickme</button>
    <h2>{isShow && <Item/>}</h2>
    </>);
}

const Item=()=>{
    const [size,setSize] = useState(window.innerWidth);
    const checkSize=()=>{
        setSize(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize',checkSize);
        return ()=>{
            window.removeEventListener('resize',checkSize);
        }
    },[])
    return (
        <>
        <h2>window size is : </h2>
        <h2>{size} px</h2>
        </>
    )
}

const App = () =>{
    return <React.Fragment>
        <ShowHide/>
    </React.Fragment>
}

export default App;