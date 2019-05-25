import React from 'react';
import './App.css';
import Cart from './components/Cart';
import Navigation from './components/Navigation';
import ProductsR from './components/ProductsR';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App(appProps) {
  return (
    <div className="App">
      
        <Router>
          <div className="header"><Navigation/></div>
        
          <div className="content">
            <Route exact path="/" render={(props) => <ProductsR {...appProps} />} />
            {/* <Route path="/products" component={ProductsR} /> */}
            <Route path="/cart" component={Cart} />
          </div>
        </Router>

    </div>
  );
}

export default App;
