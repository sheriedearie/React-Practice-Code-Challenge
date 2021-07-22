import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {
  constructor() {
    super()
    this.state = {
      sushi: []
    }
  }

  componentDidMount() {
      fetch(API) 
        .then(res => res.json())
        .then(data => console.log(data))
  }

 
  
  render() {
    return (
      <div className="app">
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

export default App;