import React,{useState,useRef,useEffect,useReducer,useContext} from 'react';
import ReactDom from 'react-dom';
// import {data} from './data;
import {useFetch} from './useFetch';
import Product from './product';

const url = 'https://course-api.com/react-prop-types-example'
const PropTypes=()=>{
    const {loading,products} = useFetch(url)

    return (
        <>
        <h2>{loading && 'Loading....'}</h2>
        <section>
            {
                products.map((eachProduct)=>{
                    const {id,name,price} = eachProduct
                    return <Product key={id} {...eachProduct} />
                })
            }
        </section>
        </>
    )
}
const App = () =>{
    return (<React.Fragment> 
        <PropTypes/>
    </React.Fragment>)
}

export default App;