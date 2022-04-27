import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
const MultipleInputs=()=>{
    // const [firstName,setFirstName] = useState('');
    // const [email,setEmail] = useState('');
    const [people,setPeople] = useState([]);
    const [person,setPerson] = useState({firstName : '',email : '',age:''});
    const handleEvent=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        // const newPerson = {...person,[name] : value};
        // console.log(newPerson);
        setPerson({...person,[name] : value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newPeople = {...person,id : new Date().getTime().toString()}
        setPeople([...people,newPeople]);
        setPerson({firstName:'',age:'',email:''});
    }
    return (
        <>
        <article>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div>
                <label htmlFor='firstName'>Name : </label>
                <input type='text' id='firstName' name='firstName' value={person.firstName} onChange={(e)=> {handleEvent(e)}}></input>
            </div>
            <div>
                <label htmlFor='email'>Email : </label> {/*we set the value to the state value so thr input we give depends on state value . we need to change the state when we type each time*/}
                <input type='text' id='email' name='email' value={person.email} onChange={(e)=> {handleEvent(e)}}></input>
            </div>
            <div>
                <label htmlFor='age'>Age : </label> {/*we set the value to the state value so thr input we give depends on state value . we need to change the state when we type each time*/}
                <input type='text' id='age' name='age' value={person.age} onChange={(e)=> {handleEvent(e)}}></input>
            </div>
            <button type='submit'>add person</button>
            </form>
        </article>
        <article>
            {
            people.map((eachPeople)=>{
                const {id,firstName,email,age} = eachPeople;
                return (
                <div key = {id}>
                    <h4>{firstName}</h4>
                    <h4>{email}</h4>
                    <h4>{age}</h4>
                </div>    
                )
            })}
        </article>
        </>
    )
}

const App = () =>{
    return <React.Fragment>
        <MultipleInputs/>
    </React.Fragment>
}

export default App;