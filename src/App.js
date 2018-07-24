import React, { Component } from 'react';
import { Navbar, NavItem, Icon, Row, Footer, Section, Container, Button, Col } from 'react-materialize'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar className="light-blue lighten-1" brand="logo" right>
            <NavItem href='#'><Icon>menu</Icon></NavItem>
            <NavItem href='#'><Icon>search</Icon></NavItem>
          </Navbar>
          <Section>
            <Container>
              <br />
              <br />
              <h1 className="header center orange-text">Good Omens</h1>
              <Row className="center">
                <h5 className="header col s12 light">
                  A modern game of prediction.
                </h5>
              </Row>
              <Row className="center">
                <Button className="btn-large">Get started</Button>
              </Row>
            </Container>
          </Section>
          <Section>
            <Container>
              <Row>
                <Col className="m6 s12">
                  <div className="icon-block">
                    <h2 className="center light-blue-text"><Icon>settings</Icon></h2>
                    <h5 className="center">Pretty good start</h5>
                    <p className="light">
                      A bunch of svada text....
                    </p>
                  </div>
                </Col>
                <Col className="m6 s12">
                  <div className="icon-block">
                    <h2 className="center light-blue-text"><Icon>group</Icon></h2>
                    <h5 className="center">Easy for everyone</h5>
                    <p className="light">
                      More svada text....
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Section>
          <Footer className="orange" copyrights="Jalla 2018 Good Omens">
            <h5 className="white-text">Good Omens</h5>
            <p className="grey-text text-lighten-4">
              Predict game.
            </p>
          </Footer>
        </Container>
      </div>
    );
  }
}

export default App;
