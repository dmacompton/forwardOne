import React, { Component } from 'react';

class Book extends Component {
  onClick = () => {
    const { id, onClick } = this.props;
    onClick(id);
  }
  render() {
    const { author, price, title } = this.props;
    return (
      <div onClick={this.onClick}>{title} - {author} {price}$</div>
    )
  }
}

export default Book;