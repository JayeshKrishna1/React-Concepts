import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
import {data} from './data';
import {Link,useParams} from 'react-router-dom';
//when reacts reads link it goes to the router element and goes to the route element which matches the to props of link tag with path props of route tag
const Person=()=>{
    const [people,setPeople] = useState(data);
    // console.log(useParams());
    const {id} = useParams();
    useEffect(()=>{
        const newPeople = people.filter((eachPeople)=> eachPeople.id === parseInt(id));
        setPeople(newPeople);
    },[])
    return (
        <>
        <h2>Person Page</h2>
        {
            people.map((People)=>{
                const {id,name} = People;
                return <h2 key={id}>{name}</h2>
            })
        }
        <Link to='/people'>Back to People</Link>
        </>
    )
}


export default Person;