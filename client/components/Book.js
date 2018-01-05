import React, { Component } from 'react';

class Book extends Component {
  onRatingClick = () => {
    const { id, onRatingClick } = this.props;
    onRatingClick(id);
  }
  render() {
    const { author, price, rating, title } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <div>{author}</div>
        <div>{price}$</div>
      </div>
    );
  }
}

export default Book;