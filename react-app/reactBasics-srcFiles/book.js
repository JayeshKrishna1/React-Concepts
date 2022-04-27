import React from 'react';

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

export default Book; // ina file there can be only one default export 