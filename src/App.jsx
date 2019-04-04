import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import ShopingList from './ShopingList';
import Cart from "./Cart"
import Footer from "./Footer"
import Toggler from './Toggler';




export default class App extends Component {
constructor(props){
  super(props);
  super(props);
    this.state = {
      counter: 0,
   searchQuery:''
  };
  this.handlechange =this.handlechange.bind(this);
  this.handleAddClick =this.handleAddClick.bind(this);
  this.handleDeleteClick =this.handleDeleteClick.bind(this);

 
}

handleAddClick(e){
  console.log(e);
  let currentState =this.state;
  currentState.counter++;
  this.setState(currentState);
}

handleDeleteClick(e){
  console.log(e);
  let currentState =this.state;
  if(this.state.counter <= 0){this.setState(currentState);}else{
  currentState.counter--;
  this.setState(currentState);
  }
}


handlechange(data){
  console.log(data);
  let currentState =this.state;
  currentState.searchQuery=data;
  this.setState(currentState);
}

render(){
  return(
    <div>
   
    <Cart count={this.state.counter}></Cart>
       <Search searchText={this.handlechange}  />
      <ShopingList searchName={this.state.searchQuery} add={this.handleAddClick}delete={this.handleDeleteClick}> </ShopingList> 
      
<Footer/>
 
      </div>
      

  )
}
}

