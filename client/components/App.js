import React, { Component } from 'react';
import BookList from './BookList';
import axios from 'axios';

class App extends Component {
  state = {
    books: this.props.initialData,
    ratings: {},
  };
  fetchRatingForBook = (bookId) => {
    if (this.state.ratings[bookId]) return;
    axios.get(`http://localhost:8080/api/books/${bookId}/ratings`)
      .then(res => {
        this.setState((prevState) => {
          const currentRatings = prevState.ratings;
          currentRatings[bookId] = res.data;
          return { ratings: currentRatings }
        });
      });
  }
  render() {
    const { books, ratings } = this.state;
    return (
      <div>
        <BookList
          books={books}
          ratings={ratings}
          onBookClick={this.fetchRatingForBook}
        />
      </div>
    )
  }
}

export default App;