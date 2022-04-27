import React,{useState,useRef,useEffect,useReducer,useContext,useMemo,useCallback} from 'react';
import ReactDom from 'react-dom';
// import {data} from './data;

import { useFetch } from './usefetch';
const url='https://course-api.com/javascript-store-products';
//every time when prop or state changes the component re-renders
// *****IMPORTANT****** hooks are always called at only the end of a component render *****IMPORTANT******
const calculateMostExpensive=(products)=>{
    // everytime when either cart/count button is clicked this function is also called during its re render
    //we can stop this by adding callback
    console.log('hello');
    return (
        products.reduce((total,eachProduct)=>{
            const price = eachProduct.fields.price;
            if(total<=price){
                total = price;
            }
            return total;
        },0)
    )
}

const Optimization=()=>{
    const {products} = useFetch(url); 
    console.log(products);  
    const [count,setCount] = useState(0);
    const [cart,setcart] = useState(0);
    
    const addToCart = useCallback(()=>{
        //by using useCallabck we can restrict the function by calling it when we click on count button
        console.log(cart);
        setcart(cart+1); 
    },[cart]) // how ever when value of cart changes ie., when clicking cart button the funcion is called
    return (
        <>
        <h2>Count : {count}</h2>
        <button type='button' onClick={()=> setCount(count+1)}>click me to increase count</button>
        <h2>cart : {cart}</h2>
        <h2>most expensive price is {calculateMostExpensive(products)}</h2>
        <MappingProduct products={products} addToCart={addToCart}/>
        </>
    )
}
const MappingProduct=React.memo(({products,addToCart})=>{ 
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