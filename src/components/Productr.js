import React from 'react';
import './Product.css';

class Product extends React.Component {
    constructor(){
        super();
        this.state = {}
        this.add.bind(this);
    }
    componentDidMount() {
       }

    add(id) {
        // var i = {...id};
        // var ids = localStorage.getItem('ids') != null ? JSON.parse(localStorage.getItem('ids')) : [];
        // let target = ids.filter(item => item.id === i.id);
        // const amount = target.length > 0 ? (target[0].amount + 1): 1;
        // let remainder = ids.filter(item => item.id !== i.id);
        // i.amount = amount;
        // remainder.push(i);
        // localStorage.setItem('ids', JSON.stringify(remainder));
        // console.log(JSON.parse(localStorage.getItem('ids')));
        // const size = localStorage.getItem('size') ? +localStorage.getItem('size') + 1 : 1;
        // localStorage.setItem('size', size);
        // // localStorage.clear();
    }


    render() {
        return (
            <div className="product">
                <img src={this.props.img} width="100%"/>
                <div className="">
                   {this.props.name}
                   <div className="description">
                        {this.props.description} 
                   </div> 
                   
                </div>
                <button onClick={() => this.add(this.props)}>ADD TO CARD</button>
            </div>
        );
    }
}

export default Product;
