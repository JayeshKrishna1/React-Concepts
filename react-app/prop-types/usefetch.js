import React,{useState,useEffect} from 'react';

export const useFetch=(url)=>{
    const [loading,setLoading] = useState(true);
    const [products,setProducts] = useState([]);
    const getItems=()=>{
        fetch(url).then(res => res.json()).then((res)=> {
            setLoading(false);
            setProducts(res);
        })
    }
    useEffect(()=>{
        getItems();
    },[])
    return {loading,products}
}