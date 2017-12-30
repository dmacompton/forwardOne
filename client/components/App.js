import React, { Component } from 'react';
import BookList from './BookList';

class App extends Component {
  state = {
    count: 42
  }
  render() {
    const { title } = this.props;
    return (
      <div>
        <p>{title}</p>
        <BookList />
      </div>
    )
  }
}

export default App;