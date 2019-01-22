import React, { Component } from 'react';

class ShoppingItem extends Component {
  render() {
    return (
      <div className="shopping-item">
        <h2>The Name Is: {this.props.item.name}</h2>
        <img src={this.props.item.image_url} alt="image_url" />
        <button onClick={this.props.add}> Add </button>
        <button onClick={this.props.remove}> Remove </button>
      </div>
    );
  }
}

export default ShoppingItem;
