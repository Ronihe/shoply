import React, { Component } from 'react';
import ShoppingItem from './ShoppingItem';
import data from '../data';

class Cart extends Component {
  render() {
    // console.log(this)
    const boughtItems = Object.keys(this.props.boughtItems);
    let boughtCart =
      boughtItems.length === 0 ? (
        <h2>You have not bought anything</h2>
      ) : (
        Object.keys(this.props.boughtItems).map(id => (
          <ShoppingItem
            amount={this.props.boughtItems[id]}
            item={data.items.filter(item => item.id === +id)[0]}
            add={() => {
              this.props.add(data.items.filter(item => item.id === +id)[0]);
            }}
            remove={() => {
              this.props.remove(
                data.items.filter(item => item.id === +id)[0].id
              );
            }}
          />
        ))
      );

    return (
      <div>
        <h1>These are what you bought</h1>
        {boughtCart}
      </div>
    );
  }
}

export default Cart;
