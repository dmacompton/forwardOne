import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onBookClick, calcRatingForBook, onTitleClick }) => {
  return (
    <div>
      {
        !books.length ?
          'No books' :
          books.map(book => (
            <BookItem
              onClick={onTitleClick}
              key={book.id}
              rating={calcRatingForBook(book.id)}
              onRatingClick={onBookClick}
              {...book}
            />
          ))
      }
    </div>
  )
}

export default BookList;