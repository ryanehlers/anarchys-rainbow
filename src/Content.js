import React, { Component } from 'react';
import Home from './Home.js';
import Blog from './Blog.js';
import LGUnplugged from './BlogPosts/Liam-Gallagher-Unplugged-Review.js'
import './App.css'

class Content extends Component {
  constructor(props) {
    super(props);
    this.press = this.press.bind(this);
  }

  press(name) {
    this.props.press(name);
  }

  render() {
    switch (this.props.page) {
      default:
        return (
          <div className="Home">
            <Home />
          </div>
        );

      case 'Blog':
        return (
          <div className="Blog">
            <Blog press={this.press} />
          </div>
        );

      case 'lgUnplugged':
        return (
          <div className="BlogPost">
            <LGUnplugged press={this.press} />
          </div>
        );
    }
  }
}

export default Content;