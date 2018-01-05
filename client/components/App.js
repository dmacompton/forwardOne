import React, { Component } from 'react';
import axios from 'axios';

import Book from './Book';
import BookList from './BookList';

class App extends Component {
  state = {
    books: this.props.initialData,
    ratings: {},
    currentBookId: null,
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
  showBookPage = (currentBookId) => {
    history.pushState({ currentBookId }, '', `/books/${currentBookId}`)
    this.setState({ currentBookId });
  }
  calcRatingForBook = (bookId) => {
    const ratings = this.state.ratings[bookId];
    if (!ratings || !ratings.length) return;
    return ratings.reduce((acc, review) => acc + review.rating, 0) / ratings.length;
  }
  renderBook() {
    const { currentBookId, books } = this.state;
    const currentBook = books.find(item => item.id === currentBookId);

    return (
      <Book {...currentBook}/>
    );
  }
  renderBookList() {
    const { books, ratings } = this.state;

    return (
      <BookList
        calcRatingForBook={this.calcRatingForBook}
        books={books}
        ratings={ratings}
        onBookClick={this.fetchRatingForBook}
        onTitleClick={this.showBookPage}
      />
    );
  }
  render() {
    const { books, ratings, currentBookId } = this.state;

    return currentBookId ? this.renderBook() : this.renderBookList();
  }
}

export default App;