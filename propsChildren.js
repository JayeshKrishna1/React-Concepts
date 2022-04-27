import React from  'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

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
  const name = "sdz"
  return (
    <section className='BookList'>
      <Book img={firstBook.img} name={firstBook.name} author={firstBook.author}>
        {
        (name)=>{
          return <p>Timeless {name} lessons on wealth, greed, a meeting room, where personal history, your unique view of the world, ego, pride, marketing, and odd incentives are scrambled together. In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life?s most important matters.</p>
      }}
      </Book>
      <Book img={secondBook.img} name={secondBook.name} author={secondBook.author}/>
    </section>
  );
}
// children has the p tag
const Book = ({img,name,author,children}) => {
  const name = "children value"
  return (
    <article className='Book'>
      <img src={img} alt='bookImage'></img>
      <h1>{name}</h1>
      <h4>{author}</h4>
      {children(name)}
    </article>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));