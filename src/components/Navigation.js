import React from 'react';
import './Navigation.css';
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Navigation extends React.Component {
    constructor(){
        super();
        this.state = {
            size: 0
        }
        this.getSize.bind(this);
    }

    componentDidMount() {
        console.log(JSON.parse(localStorage.getItem('ids')));
    }

    getSize() {
        const s = JSON.parse(localStorage.getItem('ids'));
        var size = s.length;
        return size;
    }

    render() {
        // const size = JSON.parse(localStorage.getItem('ids')) ? 
        // JSON.parse(localStorage.getItem('ids')).length : 0 ;
        return (
            <div className="container">
                <span className="logo">My Shop</span>
                <div className="nav">
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart({localStorage.getItem('size') ? 
        JSON.parse(localStorage.getItem('size')) : 0 })</Link>
                </div>
                
            </div>
        );
    }
}

export default Navigation;
