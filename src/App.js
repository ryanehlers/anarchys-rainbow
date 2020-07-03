import React from 'react';
import Header from './Header.js';
import Home from './Home.js';
import getParameterByName from './getParameterByName.js';
import './App.css';

function App() {
  console.log(getParameterByName("x"));
  return (
    <div className="App">
      <Header className="Header" />
      <Home />
    </div>
  );
}

export default App;
