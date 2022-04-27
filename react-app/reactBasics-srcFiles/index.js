import React from  'react';
import ReactDom from 'react-dom';

//CSS
// import './index.css';

// importing books.js
import {books} from './books' // must be the same name as exported

//importing book.js
import SpecificBook from './book' // as it exported as default we can have different name

const BookList =  () => {
  return (
    <section className='BookList'>
      {books.map((book)=>{
        // const {img,author,name} = book;
        return <SpecificBook key={book.id} {...book}></SpecificBook> // spread operator separates properties 
      })}
    </section>
  );
}
// events : onClick,onMouseOver

ReactDom.render(<BookList/>,document.getElementById('root'));