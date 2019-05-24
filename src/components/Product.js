import React from 'react';
import './Product.css';

class Product extends React.Component {
    constructor(){
        super();
        this.state = {}
    }


    render() {
        return (
            <div className="product">
                <img src={this.props.img} width="100%"/>
                <div>
                   {this.props.name}
                   <div className="description">
                        {this.props.description} 
                   </div> 
                   
                </div>
                <button>ADD TO CARD</button>
            </div>
        );
    }
}

export default Product;
