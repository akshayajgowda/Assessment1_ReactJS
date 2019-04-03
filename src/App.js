import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ListItem from './ListItem';
import SearchItems from './SearchItems';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      searchQuery:'',
      counter:0
    };
    

    this.handlersearch=this.handlersearch.bind(this);
    this.handlersearchText=this.handlersearchText.bind(this);
    this.handlerClick=this.handlerClick.bind(this);


  }

  handlersearch(data){
    console.log(data);
  }

    handlerClick(e){
    console.log(e);
    let counterState=this.state;
    counterState.counter++;
    this.setState(counterState);
  }

handlersearchText(data){
  console.log(data);
  let currentState=this.state;
  currentState.searchQuery=data;
  this.setState(currentState);
}



  render() {
    return (
      <div className="App">
      <Header count={this.state.counter}/><br /><br />
      <SearchItems search={this.handlersearchText} searchText={this.handlerClick}/><br /><br />
      <ListItem search={this.state.searchQuery}/>
      </div>
    );
  }
}

export default App;
