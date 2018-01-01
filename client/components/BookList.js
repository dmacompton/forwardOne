import React from 'react';
import Book from './Book';

const BookList = ({ books, onBookClick }) => {
  return (
    <div>
      {
        !books.length ?
          'No books' :
          books.map(book => (
            <Book
              key={book.id}
              onClick={onBookClick}
              {...book}
            />
          ))
      }
    </div>
  )
}

export default BookList;