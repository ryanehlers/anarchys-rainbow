import React, { Component } from 'react';
import Header from './Header.js';
import Content from './Content.js';
import getParameterByName from './getParameterByName.js';
import buttonToPageMap from './buttonToPageMap.js';
import './App.css';
import Subscribe from './Subscribe.js';

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
        <h2>Join the mailing list</h2>
        <Subscribe />
      </div>
    );
  }
}

export default App;
