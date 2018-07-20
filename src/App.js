import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Row, Footer, Section, Container } from 'react-materialize'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar className="light-blue lighten-1" brand="logo" right>
          <NavItem href='#'><Icon>menu</Icon></NavItem>
          <NavItem href='#'><Icon>search</Icon></NavItem>
        </Navbar>
        <div className="section">
          <Row></Row>
          <div className="row">
            <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
              <h5 class="center">Speeds up development</h5>

              <p class="light">We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
              <h5 class="center">User Experience Focused</h5>

              <p class="light">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
            </div>
          </div>

          <div class="col s12 m4">
            <div class="icon-block">
              <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
              <h5 class="center">Easy to work with</h5>

              <p class="light">We have provided detailed documentation as well as specific code examples to help new users get started. We are also always open to feedback and can answer any questions a user may have about Materialize.</p>
            </div>
          </div>
          </div>
        </div>
        <Footer className="orange">

        </Footer>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <Footer copyrights="&copy 2018 Naglfar">
      //     <h5 className="black-text">Footer content</h5>
      //   </Footer>
      // </div>
    );
  }
}

export default App;
