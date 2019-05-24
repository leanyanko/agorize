import React from 'react';
import './Cart.css';
import Item from './Item';

class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            items: [],
            size: 0
        }
        this.remove.bind(this); 
    }

    remove(id) {
        const items = JSON.parse(localStorage.getItem('ids')).filter(item => item.id !== id);
        const amount = JSON.parse(localStorage.getItem('ids')).filter(item => item.id === id)[0].amount;
        localStorage.setItem('ids', JSON.stringify(items));
        localStorage.setItem('size', +localStorage.getItem('size') - amount);
    }

    render() {
        let cart = localStorage.getItem('ids') ? JSON.parse(localStorage.getItem('ids')) : [];
        return (
            <div className="cart">
                {
                cart.length === 0 ? 
                    <span className="empty">The cart is empty</span> : 
                    cart.map(item => {
                        return <Item key={item.id} 
                                        id={item.id}
                                        amount={item.amount} 
                                        name={item.name} 
                                        img={item.img} 
                                        description={item.description}
                                        remove={this.remove}
                                        />
                    })}
            </div>
        );
    }
}

export default Cart;
