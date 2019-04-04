import React, {Component } from "react";
import './addDelete.css';


class Search extends Component{
constructor(props){
    super(props);
}
render(){
    return(
        <div className="cartname search">
            <input type="text" placeholder="Search" onChange={(e)=>{
                this.props.searchText(e.target.value);
            }} />

        </div>
    )
}

}


export default Search;