import React, { Component } from 'react';
import './Header.css';


export default class Header extends Component{
constructor(props){
    super(props);

}

render(){
    return(
        <div>
                <ul>
                     <li><a href="#home" className="t-c"><b>Shoppers</b> </a></li> 
                     <li className="f-r"><a className="active" href="#about">Cart</a></li>
                </ul>
</div>
    )
}

}