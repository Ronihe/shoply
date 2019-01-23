import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import ShoppingListContainer from '../containers/ShoppingListContainer';
import CartContainer from '../containers/CartContainer.js';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact render={() => <ShoppingListContainer />} />
        <Route path="/cart" exact render={() => <CartContainer />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}
export default Routes;
