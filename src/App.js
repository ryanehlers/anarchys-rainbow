import React, { Component } from 'react';
import Header from './Header.js';
import Home from './Home.js';
import getParameterByName from './getParameterByName.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.press = this.press.bind(this);
  }

  press(button) {
    console.log('click');
    //updateState(this, button);
  }

  render () {
    getParameterByName('x');
    return (
      <div className="App">
        <Header className="Header" press={this.press} />
        <Home />
      </div>
    );
  }
}

export default App;
