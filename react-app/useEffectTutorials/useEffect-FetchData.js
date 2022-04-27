import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
// import {data} from './data';

//useEffect is to add sideEffects ;ike fetching etc., and it is invoked after every re rendering
//cleanup cleans the memory once the event is completed
const UseEffectFetchData=()=>{
    const [users,setUsers] = useState([]);
    async function getUsers(){
        const response = await fetch('https://api.github.com/users');
        console.log(response);
        const users = await response.json();
        console.log(users);
        setUsers(users);
    }
    useEffect(()=>{
        getUsers();
    },[])
return (
    <>
    <h2>github users</h2>
    {
        users.map((user)=>{
            const {id,login,avatar_url} = user;
            return (
                <div>
                    <ul>
                        <li key={id}>
                            <img src={avatar_url}/>
                            <h4>{login}</h4>
                        </li>
                    </ul>
                </div>
            )
        })
    }
    </>
)
}

const App = () =>{
    return <React.Fragment>
        <UseEffectFetchData/>
    </React.Fragment>
}

export default App;