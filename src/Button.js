import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.press = this.press.bind(this);
  }

  press() {
    this.props.press(this.props.name);
  }

  render() {
    return (
      <span>
        <button
          className="Button"
          onClick={this.press}
        >
          {this.props.name}
        </button>
      </span>
    );
  }
}

export default Button;