import React from 'react';
import ReactDom from 'react-dom';

const Model = (props)=>{
    const {modelContent,closeModel} = props;
    React.useEffect(()=>{
        setTimeout(()=>{
            closeModel();
        },3000)
    })
    return <h2>{modelContent}</h2>
}

export default Model;