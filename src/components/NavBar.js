import React, { Component } from 'react';
// import { li } from 'react-router-dom';

class NavBar extends Component {
  render() {
    // debugger;
    let totalQuantity = Object.values(this.props.boughtItems).reduce(
      (acc, currV) => acc + currV,
      0
    );
    // console.log('bought items----', this.props.bougtItems);
    let totalPrice = 0;
    for (let key in this.props.boughtItems) {
      let amount = this.props.boughtItems[key];
      console.log('items------', this.props.items);
      let filteredItems = this.props.items.filter(i => i.id === +key);

      console.log('price, amount-------', key, amount, filteredItems);
      if (filteredItems.length === 0) break;
      console.log('navbarrrrrrrr', amount, filteredItems);
      totalPrice = amount * filteredItems[0].price;
    }

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <li class="navbar-brand" to="#">
          Shoply
        </li>
        <span>{totalQuantity}</span>
        <span>`(${totalPrice})`</span>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <li class="nav-item nav-link disabled" to="#">
              See Cart
            </li>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
