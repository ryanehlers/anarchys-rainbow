import React, { Component } from 'react';
import Home from './Home.js';
import Blog from './Blog.js';
import Music from './Music.js';
import LGUnplugged from './BlogPosts/Liam-Gallagher-Unplugged-Review.js'
import Supersonic from './BlogPosts/Notes-On-Supersonic.js'
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
      case 'home':
        return (
          <div className="Home">
            <Home />
          </div>
        );

      default:
      case 'music':
        return (
          <div>
            <Music />
          </div>
        );

      case 'blog':
        return (
          <div className="Blog">
            <Blog press={this.press} />
          </div>
        );

      case 'subscribe':
        return (
          <div className="Subscribe" />
        );

      case 'lg-unplugged':
        return (
          <div className="BlogPost">
            <LGUnplugged press={this.press} />
          </div>
        );

        case 'supersonic':
          return (
            <div className="BlogPost">
              <Supersonic press={this.press} />
            </div>
          );
    }
  }
}

export default Content;