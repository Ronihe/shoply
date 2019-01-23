import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, remove } from '../actions';
import ShoppingList from '../components/ShoppingList';
import NavBar from '../components/NavBar';

class ShoppingListContainer extends Component {
  render() {
    //console.log('shoppinglist props', this.props);
    return (
      <div>
        <NavBar {...this.props} />
        <ShoppingList {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  // let totalQuantity = Object.values(state.boughtItems).reduce(
  //   (acc, currV) => acc + currV,
  //   0
  // );
  // // loop state.boughtitems, get the price with the id and multiply the value
  // let totalPrice = 0;
  // for (let key in state.boughtItems) {
  //   let amount = state.boughtItems[key];
  //   console.log('key--------', key, state.data.items);
  //   let price = state.data.items.filter(i => i.id === key);
  //   console.log('price, amount-------', amount, price);
  //   totalPrice = amount * price[0].price;
  // }

  //console.log('total price------', totalPrice);
  return {
    items: state.data.items,
    boughtItems: state.boughtItems
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { add, remove }
);

export default connectedComponent(ShoppingListContainer);
