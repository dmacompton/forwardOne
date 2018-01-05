import React, { Component } from 'react';

class BookItem extends Component {
  onRatingClick = () => {
    const { id, onRatingClick } = this.props;
    onRatingClick(id);
  }
  render() {
    const { author, price, rating, id, title, onClick } = this.props;
    return (
      <div onClick={() => { onClick(id) }}>
        <p>{title} - {author} {price}$</p>
        <p>Rating: {rating}</p>
        <a href="#" onClick={this.onRatingClick}>Show Rating</a>
      </div>
    );
  }
}

export default BookItem;