import React from  'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

/*******************************dynamic way of displaying books****************************************/
const firstBook = {
  img : 'https://m.media-amazon.com/images/I/61xFwIM2UNL._AC_UY218_.jpg',
  name : 'The Secret(Tamil)',
  author : 'Rhonda Byrne'
}

const secondBook = {
  img : 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY218_.jpg',
  name : 'The Psychology of Money',
  author : ' Morgan Houel'
}

const BookList =  () => {
  return (
    <section className='BookList'>
      <Book img={firstBook.img} name={firstBook.name} author={firstBook.author}/>
      <Book img={secondBook.img} name={secondBook.name} author={secondBook.author}/>
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className='Book'>
      <img src={props.img} alt='bookImage'></img>
      <h1>{props.name}</h1>
      <h4>{props.author}</h4> 
    </article>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));