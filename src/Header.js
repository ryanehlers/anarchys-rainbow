import React, { Component } from 'react';
import Button from './Button.js';

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
      <header>
        <div className="HeaderButtons">
          <Button name="Music" press={this.press} />
          <Button name="Blog" press={this.press} />
        </div>
        <hr />
      </header>
    );
  }
}

export default Header;