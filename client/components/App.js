import React, { Component } from 'react';
import BookList from './BookList';
import axios from 'axios';

class App extends Component {
  state = { books: this.props.initialData };
  componentDidMount() {
    axios.get('http://localhost:8080/api/books/').then(res => {
      this.setState({
        books: res.data,
      })
    });
  }
  render() {
    const { books } = this.state;
    return (
      <div>
        <BookList books={books} />
      </div>
    )
  }
}

export default App;