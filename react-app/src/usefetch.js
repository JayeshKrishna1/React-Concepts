import React,{useState,useEffect,useCallback} from 'react';

export const useFetch=(url)=>{
    // const [loading,setLoading] = useState(true);
    const [products,setProducts] = useState([]);
    const getItems=useCallback(()=>{
        fetch(url).then(res => res.json()).then((res)=> {
            // setLoading(false);
            setProducts(res);
        })
    },[url]);
    useEffect(()=>{
        getItems();
    },[url,getItems])
    return {products}; // as users is an array if we make the return as array it will become nested array
    // so we returning an object and destructuring it in app.js
}