import React, { Component } from 'react';
import './Header.css';


export default class SearchItem extends Component{
constructor(props){
    super(props);

}

render(){
    return(
        <div>
        <input type="text" placeholder="Search" className="t-w" onChange={(e)=> {this.props.search(e.target.value)}}></input> 
        <button type="button" value="Submit" className="t-b" onClick={()=> {this.props.searchText("hello");}}>Search</button> 
        </div>
    )
}

}