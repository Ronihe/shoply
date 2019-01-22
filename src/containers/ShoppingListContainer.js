import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, remove } from '../actions';
import ShoppingList from '../components/ShoppingList';

class ShoppingListContainer extends Component {
  render() {
    return <ShoppingList {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { add, remove }
);

export default connectedComponent(ShoppingListContainer);
