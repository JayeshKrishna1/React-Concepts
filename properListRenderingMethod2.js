import React from  'react';
import ReactDom from 'react-dom';

//CSS
// import './index.css';
const books = [

{
  img : 'https://m.media-amazon.com/images/I/61xFwIM2UNL._AC_UY218_.jpg',
  name : 'The Secret(Tamil)',
  author : 'Rhonda Byrne'
},

{
  img : 'https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UY218_.jpg',
  name : 'The Psychology of Money',
  author : ' Morgan Houel'
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
        const {img,author,name} = book;
        return <Book book={book}></Book>
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const {img,name,author} = props.book;
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