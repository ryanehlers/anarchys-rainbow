import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';
import getParameterByName from './getParameterByName.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.press = this.press.bind(this);
    this.state = { page: getParameterByName('page') };
  }

  press(button) {
    console.log(button);
    this.setState({
      page: button
    });
  }

  render () {
    return (
      <div className="App">
        <Header press={this.press} />
        <Content page={this.state.page} />
      </div>
    );
  }
}

export default App;
