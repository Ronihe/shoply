import React, { Component } from 'react';
import './App.css';
import ShoppingListContainer from './containers/ShoppingListContainer';
import NavBarContainer from './containers/NavBarContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingListContainer />
      </div>
    );
  }
}

export default App;
