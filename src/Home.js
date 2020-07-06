import React, { Component } from 'react';
import rainbow from './rainbow.png';

class Home extends Component {
  render() {
    return (
      <div>
        <img src={rainbow} className="App-logo" alt="rainbow" />
        <p>
          Anarchy's Rainbow
        </p>
      </div>
    );
  }
}

export default Home;