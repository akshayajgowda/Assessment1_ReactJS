import React, {Component } from "react";
import './addDelete.css';


class Cart extends Component{
constructor(props){
    super(props);
}
render(){
    return(
        <div className="Header">
          <li>Shoping</li>
          <li><label>Cart <span>{this.props.count}</span></label></li>
                
           

        </div>
    )
}

}


export default Cart;