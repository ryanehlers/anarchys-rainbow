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
        <a href={nameToHrefMap(this.props.name)} target="_blank" rel="noopener noreferrer">
          <button>
            <img 
              style={{height: "20px", width: "30px", marginBottom: "15px"}}
              src={nameToImageMap(this.props.name)}
              alt={this.props.name}
              onClick={this.press}
            />
          </button>
        </a>
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

function nameToHrefMap(name) {
  switch (name) {
    default:
    case "Home":
      return "http://www.anarchysrainbow.com";
    
    case "Twitter":
      return "https://www.twitter.com/RyanEhlers5";

      case "Instagram":
        return "https://www.instagram.com/anarchysrainbow";
  }
}

export default ImageButton;
