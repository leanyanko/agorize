import React from 'react';
import './Navigation.css';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Navigation extends React.Component {
    constructor(){
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="container">
                <span className="logo">My Shop</span>
                <div className="nav">
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart</Link>
                </div>
                
            </div>
        );
    }
}

export default Navigation;
