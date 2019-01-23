import React, { Component } from 'react';
import './App.css';
import NavBarContainer from './containers/NavBarContainer';
import Routes from './components/Routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBarContainer />
        "Welcome to Shoply"
        <Routes />
      </div>
    );
  }
}

export default App;
