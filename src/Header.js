import React, { Component } from 'react';
import Button from './Button.js';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="HeaderButtons">
          <Button name="Music" />
          <Button name="Blog" />
        </div>
        <hr />
      </header>
    );
  }
}

export default Header;