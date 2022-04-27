import React from  'react';
import ReactDom from 'react-dom';

//CSS
// import './index.css';
const books = [

{
  id : 1,
  img : 'https://m.media-amazon.com/images/I/61xFwIM2UNL._AC_UY218_.jpg',
  name : 'The Secret(Tamil)',
  author : 'Rhonda Byrne'
},

{
  id : 2,
  img : 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY218_.jpg',
  name : 'The Psychology of Money',
  author : ' Morgan Houel'
},
{
  id : 3,
  img : 'https://m.media-amazon.com/images/I/719Z88RVusL._AC_UY218_.jpg',
  name : 'Limitless: The Power of Unlocking Your True Potential',
  author : 'Radhika Gupta'
},
];

const BookList =  () => {
  return (
    <section className='BookList'>
      {books.map((book)=>{
        // const {img,author,name} = book;
        return <Book key={book.id} {...book}></Book> // spread operator separates properties 
      })}
    </section>
  );
}
// events : onClick,onMouseOver
const Book = (props) => {
  console.log(props);
  const {img,name,author} = props;
  const clickEvent = () =>{
    alert("hi Jayesh");
  }
  return (
    <article className='Book' onMouseOver={(e)=>
    {
      console.log(author);
      console.log(e);
    }}>
      <img src={img} alt='bookImage'></img>
      <h1>{name}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={() => clickEvent()}>clickForAlert</button>
      <button type='button' onClick={() => console.log(name)}>clickForTittle</button>
    </article>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));