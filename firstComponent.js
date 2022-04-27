import React from 'react';
import ReactDom from 'react-dom'

// returing jsx and its a stateless

// function Greeting(){
//   return <h1>this is jayesh's first react component</h1>;
// }

// ----------------------------------------

// using arrow function and without jsx

 const Greeting = () =>{
   return React.createElement('h1',{},'hello Jayesh');
}
ReactDom.render(<Greeting/>,document.getElementById('root'));

