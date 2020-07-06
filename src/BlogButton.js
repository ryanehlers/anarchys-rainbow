import React, { Component } from 'react';
import lg from './BlogPosts/LG_unplugged.jpg';
import supersonic from './BlogPosts/supersonic.jpg'

class BlogButton extends Component {
  constructor(props) {
    super(props);
    this.press = this.press.bind(this);
  }

  press() {
    this.props.press(this.props.name);
  }

  render() {
    return (
      <button className="BlogButton" onClick={this.press}>
        <img height="180px" src={nameToImageMap(this.props.name)} alt="album art"/>
        <p>{nameToTitleMap(this.props.name)}</p>
      </button>
    );
  }
}

function nameToImageMap(name) {
  switch (name) {
    default:
      return lg;

    case "lg-Unplugged":
      return lg;

    case "supersonic":
      return supersonic;
  }
}

function nameToTitleMap(name) {
  switch (name) {
    default:
      return "Review: MTV Unplugged (Live At Hull City Hall), Liam Gallagher";

    case "lg-Unplugged":
      return "Review: MTV Unplugged (Live At Hull City Hall), Liam Gallagher";

    case "supersonic":
      return "Notes on Oasis – Supersonic .................................."
  }
}

export default BlogButton;