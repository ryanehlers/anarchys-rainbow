import React from 'react';
import Button from './Button.js';
import logo from './logo.svg';
import getParameterByName from './getParameterByName.js';
import './App.css';

function App() {
  console.log(getParameterByName("x"));
  return (
    <div className="App">
      <div className="Header">
        <Button name="Music" />
        <Button name="Blog" />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="react" />
        <p>
          Anarchy's Rainbow
        </p>
      </header>
    </div>
  );
}

export default App;
