import React, { Component } from 'react';
import rainbow from './rainbow.png'

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
            src={rainbow}
            alt="rainbow"
            onClick={this.press}
          />
        </button>
      </span>
    );
  }
}

export default ImageButton;
