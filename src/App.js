import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>This has been changed</h2>
        </div>
        <p className="App-intro">
          , Javascript is caca<code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
