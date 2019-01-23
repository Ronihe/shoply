import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, remove } from '../actions';
import NavBar from '../components/NavBar';

class NavBarContainer extends Component {
  render() {
    console.log('nabar container---', this.props);

    console.log('navbar container----', this.props);
    return <NavBar {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    totalQuantity: state.totalQuantity,
    totalPrice: state.totalPrice
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { add, remove }
);

export default connectedComponent(NavBarContainer);
