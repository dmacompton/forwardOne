// import React, { Component } from 'react';
import BookList from './BookList';

class App extends React.Component {
  state = {
    count: 42
  }
  render() {
    return (
      <div>
        <BookList/>
      </div>
    )
  }
}

export default App;