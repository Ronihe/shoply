import React, { Component } from 'react';
import ShoppingItem from './ShoppingItem';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = { itemsOnList: [] };
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add(newItem) {
    this.setState({ itemsOnList: [...this.state.itemsOnList, newItem] });
  }

  remove(itemId) {
    this.setState({
      itemsOnList: [
        ...this.state.itemsOnList.filter(item => item.id !== itemId)
      ]
    });
  }

  render() {
    return this.props.items.map(item => {
      return <ShoppingItem item={item} add={this.add} remove={this.remove} />;
    });
  }
}

export default ShoppingList;
