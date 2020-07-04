import React, { Component } from 'react';
import lg from './BlogPosts/LG_unplugged.jpg';

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
        <img height="180px" src={lg} alt="album art"/>
        <p>Review: MTV Unplugged (Live At Hull City Hall), Liam Gallagher</p>
      </button>
    );
  }
}

export default BlogButton;