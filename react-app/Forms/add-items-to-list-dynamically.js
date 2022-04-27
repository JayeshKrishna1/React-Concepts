import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
const FormBasics=()=>{
    const [firstName,setFirstName] = useState('');
    const [email,setEmail] = useState('');
    const [people,setPeople] = useState([]);
    const handleEvent=(e)=>{
        e.preventDefault();
        console.log(firstName,email);
        const person = {id : new Date().getTime().toString() ,firstname : firstName,Email : email};
        console.log(person);
        setPeople((people)=>{
            return [...people,person];
        });
        console.log(people); // it prints empty array becoz the value of people will be updated only when setPeople method runs.
        // before the setPeople method runs this log(people) runs. at the time the array people is empty. 
        setFirstName('');
        setEmail('');
    }
    return (
        <>
        <article>
            <form onSubmit={(e) => handleEvent(e)}>
            <div>
                <label htmlFor='firstName'>Name : </label>
                <input type='text' id='firstName' name='firstName' value={firstName} onChange={(e)=> setFirstName(e.target.value)}></input>
            </div>
            <div>
                <label htmlFor='email'>Email : </label> {/*we set the value to the state value so thr input we give depends on state value . we need to change the state when we type each time*/}
                <input type='text' id='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            </div>
            <button type='submit'>add person</button>
            </form>
        </article>
        <article>
            {
            people.map((eachPeople)=>{
                const {id,firstname,Email} = eachPeople;
                return (
                <div key = {id}>
                    <h4>{firstname}</h4>
                    <h4>{Email}</h4>

                </div>    
                )
            })}
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