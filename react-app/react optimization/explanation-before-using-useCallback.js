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
    const [cart,setcart] = useState(0);
    /* when we click on count the Optimiation component re renders and while re rendering the addToCart function is 
    written again means it treated as new function.
    as the function is a prop in React.memo ,it is treated as a new prop/change in prop by React.memo and it re renders the remaining 2 components.
    As a result while every time we click on cart button/count button the whole app re renders.  */
    const addToCart = ()=>{
        console.log(cart);
        setcart(cart+1); // as the state here changes useState triggers re render and while re rendering addTocart is written again means treated as new function by React.memo which leads to re rendering of remaining 2 components
    }
    return (
        <>
        <h2>Count : {count}</h2>
        <button type='button' onClick={()=> setCount(count+1)}>click me to increase count</button>
        <h2>{cart}</h2>
        <MappingProduct products={products} addToCart={addToCart}/>
        </>
    )
}
//React.memo is a method/function in there we can pass in the functionality of a component as a parameter
//by passing React.memo method becomes responsible for rendering of that component
//React.memo will render once and when it comes to re render it checks the prop value of the component it has.it only re renders when the prop value in the component changes
const MappingProduct=React.memo(({products,addToCart})=>{ //as we added the function as props each ttme the cart value changes it re renders
    useEffect(()=>{
        console.log('MappingProduct is called...')
    })
    return(
        <>
        {
            products.map((eachProduct)=>{
                const {id} =eachProduct;
                return <SingleProduct key={id} {...eachProduct} addToCart={addToCart}/>
            })

        }
        </>
    )
})

const SingleProduct=({fields,addToCart})=>{
    useEffect(()=>{
        console.count('SingleProduct is called...')
    })
    const{id,image,price,name} = fields;
    return(
        <>
        <img src={image[0].url}></img>
        <h2>{name}</h2>
        <h4>${price}</h4>
        <button type='button' onClick={addToCart}>Add to cart</button>
        </>
    )
}

const App = () =>{
    return (<React.Fragment> 
        <Optimization/>
    </React.Fragment>)
}

export default App;