import React, { useState, useRef } from "react";
import "./App.css";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import { Route, Switch, Redirect } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import {Link} from 'react-scroll'
import ToggleSwitch from "./components/ToggleSwitch";


function App() {


  return (
    <div className="App">
      <nav>
        <Navbar className="color-nav" collapseOnSelect expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="/">SP</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link activeClass="active" to="about" spy={true} smooth={false} className="navColor">About Me</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={false} className="navColor">My Tech Stack</Link>
              </Nav>
              <Nav>
                <Link activeClass="active" to="portfolio" spy={true} smooth={false} className="navColor">Portfolio</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={false} className="navColor">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
      {/* <ToggleSwitch /> */}

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/portfolio" exact component={Portfolio} />
      </Switch>

      <main>
        <About /> <hr className="lineBreak"></hr>
        <Skills /> <hr className="lineBreak"></hr>
        <Portfolio /> <hr className="lineBreak"></hr>
        <Contact/>
        <Footer />
      </main>
    </div>
  );
}

export default App;
