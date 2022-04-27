import React from  'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

//variable setup
const img = 'https://m.media-amazon.com/images/I/61xFwIM2UNL._AC_UY218_.jpg';
const author = 'Rhonda Byrne';
const name = 'The Secret(Tamil)';

const BookList =  () => {
  return (
    <section className='BookList'>
      <Book/>
    </section>
  );
}

const Book = () => {
  return (
    <article className='Book'>
      <img src={img} alt='bookImage'></img>
      <h1>{name}</h1>
      <h4>{author}</h4> 
    </article>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));