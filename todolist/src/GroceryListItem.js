import React, { Component } from 'react';

class GroceryListItem extends Component {
  state = {
    click: false,
    hover: false
  }

  onListItemClick = () => this.setState({ click: !this.state.click })
  onListItemHoverToggle = () => this.setState({ hover: !this.state.hover })

  render() {
    const style = {
      textDecoration: this.state.click ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bolder' : 'lighter'
    }

    return (
      <li style={style} 
          onMouseOver={this.onListItemHoverToggle.bind(this)} 
          onMouseLeave={this.onListItemHoverToggle.bind(this)} 
          onClick={this.onListItemClick.bind(this)}>{this.props.item}</li>
    )
  }
}

export default GroceryListItem