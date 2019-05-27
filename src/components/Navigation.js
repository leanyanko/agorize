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
        this.getSize = this.getSize.bind(this);
    }

    componentDidMount() {
        console.log(JSON.parse(localStorage.getItem('ids')));
    }

    getSize() {
        const s = +localStorage.getItem('size');
        const size = Number.isNaN(s) ? 0 : s;
        if (this.state.size !== size)
        this.setState({size: size});     
        console.log(size);

        return size;
    }

    render() {
        // const size = JSON.parse(localStorage.getItem('ids')) ? 
        // JSON.parse(localStorage.getItem('ids')).length : 0 ;
        const size = this.getSize();
        return (
            <div className="container">
                <span className="logo">My Shop</span>
                <div className="nav">
                    <Link to="/products">Products</Link>
                    <Link to="/cart">Cart({ this.state.size })</Link>
                </div>
                
            </div>
        );
    }
}

export default Navigation;
