import React,{Component} from 'react';

export default class Details extends Component{
    constructor(){
        super();

    }

    render(){
        return (
            <div>
                 


                     <div className="card">
                <img src={this.props.details.mediumImage} alt="Avatar" />
                <div className="container">
                <h4>Name:{this.props.details.name}</h4>
                <p className=""><b>ItemId:- {this.props.details.itemId}</b></p> 
                <p className=""><b>Price:  ${this.props.details.salePrice}</b></p> 
                <button type="button" className="t-b f-l m-t" onChange={(e)=> {this.props.handleChange(e.target.value)}}>Add To Cart</button> 
                <button type="button"  className="t-b f-r m-t" >Delete Cart</button> 
                </div>
            </div><br/><br/>

          
           
            </div>
          
        )
    }
}