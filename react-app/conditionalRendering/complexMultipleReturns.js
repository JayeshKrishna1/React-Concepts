import React,{useState,useEffect} from 'react';
import ReactDom from 'react-dom';
const ComplexMultipleReturns=()=>{
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);
    const [isUsers,setIsUsers] = useState('default user')
    useEffect(()=>{
        fetch('https://api.github.com/users')
        .then((res) => res.json())
        .then((users)=>{ 
            // setIsLoading(false);
            console.log(users);
            users.map((user)=>{
                const {login} = user;
                // return <h2>{login}</h2>
                console.log(login);
                setIsLoading(false);
                return setIsUsers(login);
            })
            })
        .catch((err)=> {
            setIsLoading(false);
            setIsError(true)})
    },[])
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>Error!!!</h2>
    }
    return <h2>{isUsers}</h2>
}

const App = () =>{
    return <React.Fragment>
        <ComplexMultipleReturns/>
    </React.Fragment>
}

export default App;