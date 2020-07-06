import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';
import getParameterByName from './getParameterByName.js';
import buttonToPageMap from './buttonToPageMap.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.press = this.press.bind(this);
    this.state = { page: getParameterByName('page') };
  }

  press(button) {
    this.setState({
      page: buttonToPageMap(button)
    });
  }

  render () {
    return (
      <div className="App">
        <Header press={this.press} />
        <Content press={this.press} page={this.state.page} />
        <hr />
      </div>
    );
  }
}

export default App;
