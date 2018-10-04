// import React, { Component } from 'react';
import React from 'react';
import GroceryListItem from './GroceryListItem'

// class GroceryList extends Component {
//   render() {
//     return (
//       <ul>
//       {this.grocery.map((item, index) =>
//         <GroceryListItem item={item} key={index} />
//       )}
//       </ul>
//     )
//   }
// }

const GroceryList = (props) => (
  <ul>
    {props.grocery.map((item, index) =>
      <GroceryListItem item={item} key={index} />
    )}
  </ul>
)

export default GroceryList