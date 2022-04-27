import React,{useState,useRef,useEffect,useReducer,useContext} from 'react';
import ReactDom from 'react-dom';
// import {data} from './data;

//importing router
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

//importing pages aka components
import Home from './home';
import About from './about';
import People from './people';
import Errors from './error';
import Person from './person';
import Navbar from './navbar';


const RouterSetUp=()=>{
    return(
        <Router>
            <Navbar/> {/* this will be displayed in all pages*/}
            <Switch>
                {/* switch component makes the react to render the first component that matches the path.it is used when multiple routes are there with same path */}
            <Route exact path='/'>
                <Home/>                
            </Route>
            <Route path='/about'>
                <About/>                
            </Route>
            <Route path='/people'>
                <People/>                
            </Route>
            <Route path='/person/:id' children={<Person/>}></Route>
            <Route path='*'>
                <Errors/>                
            </Route>
            </Switch>
        </Router>
    )
}
const App = () =>{
    return (<React.Fragment> 
        <RouterSetUp/>
    </React.Fragment>)
}

export default App;