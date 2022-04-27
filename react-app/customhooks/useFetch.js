import React,{useState,useEffect} from 'react';

export const useFetch=(url)=>{
    const [loading,setLoading] = useState(true);
    const [users,setUsers] = useState([]);
    const getItems=()=>{
        fetch(url).then(res => res.json()).then((res)=> {
            setLoading(false);
            setUsers(res);
        })
    }
    useEffect(()=>{
        getItems();
    },[])
    return {loading,users} // as users is an array if we make the return as array it will become nested array
    // so we returning an object and destructuring it in app.js
}