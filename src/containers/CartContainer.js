import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, remove } from '../actions';
import Cart from '../components/Cart';

class CartContainer extends Component {
  render() {
    //console.log('shoppinglist props', this.props);
    return (
      <div>
        <Cart {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    boughtItems: state.boughtItems
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { add, remove }
);

export default connectedComponent(CartContainer);
