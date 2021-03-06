import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, remove } from '../actions';
import NavBar from '../components/NavBar';

class NavBarContainer extends Component {
  render() {
    //console.log('shoppinglist props', this.props);
    return (
      <div>
        <NavBar {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.data.items,
    boughtItems: state.boughtItems
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { add, remove }
);

export default connectedComponent(NavBarContainer);
