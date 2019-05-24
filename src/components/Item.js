import React from 'react';
import './Item.css';

class Item extends React.Component {
    constructor(){
        super();
        this.state = { }
    }

    remove() {
        console.log('rem', this.props.id);
        this.props.remove(this.props.id);
    }


    render() {
        return (
            <div className="item">
            <div className="amount">X{this.props.amount}</div>
                <img src={this.props.img} width="100%"/>
                <div className="">
                   {this.props.name}
                   <div className="description">
                        {this.props.description} 
                   </div> 
                   
                </div>
                <button onClick={() => this.remove()}>REMOVE</button>
            </div>
        );
    }
}

export default Item;
