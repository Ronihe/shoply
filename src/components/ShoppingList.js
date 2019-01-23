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
    this.props.add(newItem);
  }

  remove(itemId) {
    this.setState({
      itemsOnList: [
        ...this.state.itemsOnList.filter(item => item.id !== itemId)
      ]
    });
    this.props.remove(itemId);
  }

  render() {
    // console.log(this)
    return this.props.items.map(item => {
      return <ShoppingItem item={item} add={this.add} remove={this.remove} />;
    });
  }
}

export default ShoppingList;
