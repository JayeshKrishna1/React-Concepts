import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
const FormBasics=()=>{
    const [firstName,setFirstName] = useState('');
    const [email,setEmail] = useState('');
    const handleEvent=(e)=>{
        e.preventDefault();
        console.log(firstName,email);
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
        </>
    )
}

const App = () =>{
    return <React.Fragment>
        <FormBasics/>
    </React.Fragment>
}

export default App;