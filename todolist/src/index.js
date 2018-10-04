import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

// class GroceryListItem extends React.Component {
//   state = {
//     click: false,
//     hover: false
//   }

//   onListItemClick = () => this.setState({ click: !this.state.click })
//   onListItemHoverToggle = () => this.setState({ hover: !this.state.hover })

//   render() {
//     const style = {
//       textDecoration: this.state.click ? 'line-through' : 'none',
//       fontWeight: this.state.hover ? 'bolder' : 'lighter'
//     }

//     return (
//       <li style={style} onMouseOver={this.onListItemHoverToggle.bind(this)} 
//       onMouseLeave={this.onListItemHoverToggle.bind(this)} 
//       onClick={this.onListItemClick.bind(this)}>{this.props.gro}</li>
//     )
//   }
// };

// const GroceryList = (props) => (
//   <ul>
//     {props.grocery.map(gro =>
//       <GroceryListItem gro={gro} />
//     )}
//   </ul>
// )

// const App = () => (
//   <div>
//     <h2>Grocery List</h2>
//     <GroceryList
//       grocery={[
//         'cucumbers',
//         'kale',
//         'bread',
//         'milk',
//         'cookie',
//         'apple',
//         'chocolate',
//       ]}
//     />
//   </div>
// );

ReactDOM.render(<App />, document.getElementById("root"));