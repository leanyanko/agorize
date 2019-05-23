import React from 'react';
import './Products.css';

class Product extends React.Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    componentDidMount() {
     
    }

    

    render() {
        return (
            <div>
                {this.props.name}
                <img src={this.props.img}/>
                {this.props.description}
            </div>
        );
    }
}

export default Product;
