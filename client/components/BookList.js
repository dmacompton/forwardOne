import React from 'react';
import Book from './Book';

const BookList = ({ books }) => {
  return (
    <div>
      {books.length ? books.map(book => <Book key={book.id} {...book} />) : 'No books'}
    </div>
  )
}

export default BookList;