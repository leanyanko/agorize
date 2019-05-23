import React from 'react';
import './Cart.css';

class Cart extends React.Component {
    constructor(){
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                {!this.state.products || this.state.products.length == 0? <span className="empty">The cart is empty</span> : this.state.products}
            </div>
        );
    }
}

export default Cart;
