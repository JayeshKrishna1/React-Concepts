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

const names = ['jayesh','krishna','k']

const newName = names.map((name)=>{
  console.log(name);
  // return name;
  return <h1 style={{color : 'red'}}>{name}</h1>;
})
const BookList =  () => {
  // console.log(newName);
  return (
    <section className='BookList'>
      {books.map((book)=>{
        // const {img,author,name} = book;
        return <Book key={book.id} {...book}></Book> // spread operator separates properties 
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const {img,name,author} = props;
  return (
    <article className='Book'>
      <img src={img} alt='bookImage'></img>
      <h1>{name}</h1>
      <h4>{author}</h4>
      {/* {props.children} */}
    </article>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));