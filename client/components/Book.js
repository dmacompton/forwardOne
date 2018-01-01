import React from 'react';

const Book = ({ author, price, title }) => {
  return (
    <div>{title} - {author} {price}$</div>
  )
}


export default Book;