import React, { Component } from 'react';
import rainbow from './rainbow.png';
import twitter from './twitter.png';

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
        <button>
          <img 
            style={{height: "20px", width: "30px", marginBottom: "15px"}}
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
  }
}

export default ImageButton;
