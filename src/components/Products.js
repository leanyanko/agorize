import React from 'react';
import './Products.css';

class Products extends React.Component {
    constructor(){
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                {!this.state.products || this.state.products.length == 0? <span className="empty">Thre is no products currently</span> : this.state.products}
            </div>
        );
    }
}

export default Products;
