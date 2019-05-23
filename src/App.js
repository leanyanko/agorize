import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart';
import Navigation from './components/Navigation';
import Products from './components/Products';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
        <Router>
          <div className="header"><Navigation/></div>
        
          <div className="content">
            <Route exact path="/" component={Products} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
          </div>
        </Router>

    </div>
  );
}

export default App;
