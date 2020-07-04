import React, { Component } from 'react';
import BlogButton from './BlogButton';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.press = this.press.bind(this);
  }

  press(name) {
    this.props.press(name);
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <BlogButton name="lg-Unplugged" press={this.press} />
        <BlogButton name="lg-Unplugged" press={this.press} />
      </div>
    );
  }
}

export default Blog;
