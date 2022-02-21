import React, { Component } from 'react';
import './App.css';
import ProductBids from './Components/ProductBids';
import HeaderComponent from './Components/HeaderComponent';

class App extends Component{
  render(){
    return (
    <div className="container">
        <HeaderComponent/>
        <div class="container">
          <ProductBids/>
        </div>
      </div>
    )
  }
}

export default App;

// Differenct beteewn component and function ?
