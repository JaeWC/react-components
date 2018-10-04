import React, { Component } from 'react';
import GroceryList from './GroceryList'

class App extends Component {
  
  render() {
    return (
      <div>
      <h2>Grocery List</h2>
      <GroceryList
        grocery={[
          'cucumbers',
          'kale',
          'bread',
          'milk',
          'cookie',
          'apple',
          'chocolate',
        ]}
      />
    </div>
    )
  }
}

export default App