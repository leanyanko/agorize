import React from 'react';
import './Item.css';

class Item extends React.Component {
    constructor(){
        super();
        this.state = { }
    }

    remove(id) {
        console.log('rem', this.props.id);
        this.props.remove(id);
    }


    render() {
        return (
            <div className="item">
            <div className="amount">X{this.props.amount}</div>
                <img src={this.props.img} />
                <div className="">
                   {this.props.name}
                   <div className="description">
                        {this.props.description} 
                   </div> 
                   
                </div>
                <button onClick={() => this.remove(this.props.id)}>REMOVE</button>
            </div>
        );
    }
}

export default Item;
