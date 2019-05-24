import React from 'react';
import './Products.css';
import productService from '../services/productService';
import Product from './Product';

class Products extends React.Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    componentDidMount() {
        this.getProducts();
      }
    
      getProducts() {
        productService
          .getAll()
          .then(resp => {
            console.log(resp.data);

            this.setState({ products: resp.data });
          })
          .catch(console.error);
      }
    

    render() {
        return (
            <div className="products">
                {!this.state.products || this.state.products.length == 0? <span className="empty">Thre is no products currently</span> : 
                this.state.products.map( product => {
                    return (<Product key={product.id} name={product.name} img={product.img} description={product.description}/>)
                })}
            </div>
        );
    }
}

export default Products;
