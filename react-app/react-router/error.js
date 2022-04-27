import React from 'react';
import ReactDom from 'react-dom';
import {Link} from 'react-router-dom';
//when reacts reads link it goes to the router element and goes to the route element which matches the to props of link tag with path props of route tag
const Errors=()=>{
    return (
        <>
        <h2>Error Page</h2>
        <Link to='/'>BackHome</Link>
        </>
    )
}


export default Errors;