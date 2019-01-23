import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    // debugger;
    let totalQuantity = 0;
    totalQuantity = Object.values(this.props.boughtItems).reduce(
      (acc, currV) => acc + currV,
      0
    );
    // console.log('bought items----', this.props.bougtItems);
    let totalPrice = 0;
    for (let key in this.props.boughtItems) {
      let amount = this.props.boughtItems[key];
      let filteredItems = this.props.items.filter(i => i.id === +key);
      if (filteredItems.length === 0) break;
      totalPrice = amount * filteredItems[0].price;
    }

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">
          Shoply
        </Link>
        <span>{totalQuantity}</span>
        <span>`(${totalPrice})`</span>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <li class="nav-item nav-link disabled" to="#">
              See Cart
            </li>
          </div>
        </div>

        <Link to="/cart">Carts</Link>
      </nav>
    );
  }
}

export default NavBar;
