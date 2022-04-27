import React,{useState} from 'react';
import ReactDom from 'react-dom';
import {data} from './data';
import {Link} from 'react-router-dom';
//when reacts reads link it goes to the router element and goes to the route element which matches the to props of link tag with path props of route tag
const People=()=>{
    const[people,setPeople] = useState(data);
    return (
        <>
        <h2>People Page</h2>
        {people.map((eachPeople)=>{
            const{id,name} = eachPeople;
            return (<div key={id}>
                <h4>{name}</h4>
                <Link to={`/person/${id}`}>Click here to learn more about {name}</Link>
            </div>)
        })}
        </>
    )
}


export default People;