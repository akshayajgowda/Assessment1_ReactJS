import React, {Component} from 'react'



 class ShopingDetails extends Component{
    constructor(props){
        super(props);
    }
    render(){
return(
    <div className="marginbtn">

<table>
<tbody>
  <tr>
    
    <th><img src={this.props.details.image_url}  /></th>
    <th><h2>{this.props.details.name}</h2>
    <h3>{this.props.details.price}</h3>
    Estimated price<h3>{this.props.details.description}</h3>Expected launch
    </th> 
    <th><button type="button" onClick={()=>this.props.add()}>AddCart</button> </th> 
    <th> <button type="button" onClick={()=>this.props.delete()}>DeleteCart</button> </th> 
  </tr>
  </tbody>
</table>
     
      
       </div>
)
    }
}

export default ShopingDetails;