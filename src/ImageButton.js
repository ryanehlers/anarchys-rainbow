import React, { Component } from 'react';
import rainbow from './rainbow.png';
import twitter from './twitter.png';
import instagram from './instagram.png'

class ImageButton extends Component {
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
        <button className="ImageButton">
          <img 
            style={nameToStyleMap(this.props.name)}
            src={nameToImageMap(this.props.name)}
            alt={this.props.name}
            onClick={this.press}
          />
        </button>
      </span>
    );
  }
}

function nameToImageMap(name) {
  switch (name) {
    default:
    case "Home":
      return rainbow;
    
    case "Twitter":
      return twitter;

      case "Instagram":
        return instagram;
  }
}

function nameToStyleMap(name) {
  switch (name) {
    default:
      return {height: "20px", width: "32px", marginBottom: "15px"};
    
    case "Home":
      return {height: "20px", width: "32px", marginBottom: "15px"};
  }
}

export default ImageButton;
