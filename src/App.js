import React, { Component } from 'react';
import { Footer } from 'react-materialize'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer copyrights="&copy 2018 Naglfar">
          <h5 className="black-text">Footer content</h5>
        </Footer>
      </div>
    );
  }
}

export default App;
