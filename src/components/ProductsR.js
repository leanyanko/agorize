import React from 'react'
import PropTypes from 'prop-types'
import './Products.css';
import productService from '../services/productService';
import Product from './Product';

class ProductsR extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        //this.getProducts();
    }
    
    // getProducts() {
    // productService
    //     .getAll()
    //     .then(resp => {
    //     console.log(resp.data);

    //     this.setState({ products: resp.data });
    //     })
    //     .catch(console.error);
    // }
    

    render() {
        console.log("rr",  this.props);
        return (
            <div className="products">
                {!this.props.items || this.props.items.length == 0? <span className="empty">Thre is no products currently</span> : 
                this.props.items.map( product => {
                    return (<Product key={product.id} id={product.id} name={product.name} img={product.img} description={product.description}/>)
                })}
            </div>
        );
    }
}

ProductsR.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  }



export default ProductsR;
