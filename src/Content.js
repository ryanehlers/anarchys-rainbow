import React, { Component } from 'react';
import Home from './Home.js';
import Blog from './Blog.js';
import './App.css'

class Content extends Component {
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
            <Blog />
          </div>
        );
    }
  }
}

export default Content;