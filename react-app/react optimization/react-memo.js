import React,{useState,useRef,useEffect,useReducer,useContext,useMemo,useCallback} from 'react';
import ReactDom from 'react-dom';
// import {data} from './data;

import { useFetch } from './usefetch';
const url='https://course-api.com/javascript-store-products';
//every time when prop or state changes the component re-renders
// *****IMPORTANT****** hooks are always called at only the end of a component render *****IMPORTANT******
const Optimization=()=>{
    const {products} = useFetch(url); //this is executed at the end of component rendering
    console.log(products); // 2 times the product will conosole log.one time before rendering useFetch and after rendering it
    //at first time it console log useFetch isnt called and when it called at end of rendering all components it returns the product and product is a state.as state changes react components are re rendered.
    //now at this time product has value in it. 
    const [count,setCount] = useState(0);
    return (
        <>
        <h2>Count : {count}</h2>
        <button type='button' onClick={()=> setCount(count+1)}>click me to increase count</button>
        <MappingProduct products={products}/>
        </>
    )
}
//React.memo is a method/function in there we can pass in the functionality of a component as a parameter
//by passing React.memo method becomes responsible for rendering of that component
//React.memo will render once and when it comes to re render it checks the prop value of the component it has.it only re renders when the prop value in the component changes
const MappingProduct=React.memo(({products})=>{
    useEffect(()=>{
        console.log('MappingProduct is called...')
    })
    return(
        <>
        {
            products.map((eachProduct)=>{
                const {id} =eachProduct;
                return <SingleProduct key={id} {...eachProduct}/>
            })

        }
        </>
    )
})

const SingleProduct=({fields})=>{
    useEffect(()=>{
        console.count('SingleProduct is called...')
    })
    const{id,image,price,name} = fields;
    return(
        <>
        <img src={image[0].url}></img>
        <h2>{name}</h2>
        <h4>${price}</h4>
        </>
    )
}

const App = () =>{
    return (<React.Fragment> 
        <Optimization/>
    </React.Fragment>)
}

export default App;