import React, { Component } from 'react';
import BookList from './BookList';
import axios from 'axios';

class App extends Component {
  state = { books: [] };
  componentDidMount() {
    axios.get('http://localhost:8080/api/books/').then(res => {
      this.setState({
        books: res.data,
      })
    });
  }
  render() {
    const { title } = this.props;
    const { books } = this.state;
    return (
      <div>
        <p>{title}</p>
        <BookList books={books} />
      </div>
    )
  }
}

export default App;