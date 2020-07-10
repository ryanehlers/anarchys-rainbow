import React, { Component } from 'react';
import Button from './Button.js';
import ImageButton from './ImageButton.js';
import './App.css'
import LinkButton from './LinkButton.js';

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
          <ImageButton name="Home" press={this.press} />
          <Button name="Music" press={this.press} />
          <Button name="Blog" press={this.press} />
          <LinkButton name="Twitter" press={this.press} />
          <LinkButton name="Instagram" press={this.press} />
        </nav>
        <hr />
      </header>
    );
  }
}

export default Header;