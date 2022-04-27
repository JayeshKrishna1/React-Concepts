import React from  'react';
import ReactDom from 'react-dom';

//CSS
import './index.css';

const BookList =  () => {
  return (
    <section className='BookList'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}

const Book = () => {
  return (
    <article className='Book'>
      <Image/>
      <Name/>
      <Author/>
    </article>
  );
}

const Image = ()  => {
  return <img src='https://images-na.ssl-images-amazon.com/images/G/31/img21/Books/072021/bookshprefresh/680-X-680-Bestselling._SY530_QL85_.jpg' alt='bookImage'></img>
}

function Name(){
  const name = 'Self Help and Inspirational Books';
  return <h1>{name.toUpperCase()}</h1>
}

function Author(){
  return <h4 style={{color:'darkkhaki'}}>Jayesh Krishna K</h4> //inline css more poweful then external css
  // to acces the js feautres in jsx we need to use {} and in js we set the styles as object(key-pair) so another {}
}

ReactDom.render(<BookList/>,document.getElementById('root'));