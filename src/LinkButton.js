import React, { Component } from 'react';
import ImageButton from './ImageButton.js';

class LinkButton extends Component {
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
          <ImageButton name={this.props.name} />
        </a>
      </span>
    );
  }
}

function nameToHrefMap(name) {
  switch (name) {
    default:
    case "Home":
      return "http://www.anarchysrainbow.com";
    
    case "YouTube":
      return "https://www.youtube.com/channel/UCa2W7R3OLaUSbiRddPd2jyQ";

    case "Twitter":
      return "https://www.twitter.com/anarchysrainbow";

      case "Instagram":
        return "https://www.instagram.com/anarchysrainbow";
  }
}

export default LinkButton;
