import React, { Component } from 'react';
import Button from './Button.js';
import './App.css'

class Header extends Component {
  constructor(props) {
    super(props);
    this.press = this.press.bind(this);
  }

  press(name) {
    this.props.press(name);
  }

  render() {
    return (
      <header className="Header">
        <nav className="HeaderButtons">
          <Button name="Music" press={this.press} />
          <Button name="Blog" press={this.press} />
        </nav>
        <hr />
      </header>
    );
  }
}

export default Header;