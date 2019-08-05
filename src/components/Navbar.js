import React, { Component, Fragment } from "react";
import Logo from '../assets/images/rampa_logo.svg';
import { NavLink, Link, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import Home from '../components/Home'
import Startups from '../components/Startups';



export default class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <Navbar variant="dark" expand="lg" fixed="top">
          <Navbar.Brand>
            <Link to="/">
              <img className="App-logo-image" src={Logo} alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                  <NavLink className="navMenuLink" exact to="/">
                    <h6>Inicio</h6>
                  </NavLink>
              </Nav.Item>

              <Nav.Item>
                <NavLink className="navMenuLink" exact to="/MakeOrders">
                  <h6>StartUps</h6>
                </NavLink>
              </Nav.Item>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Route exact path="/" component={Home} />
        <Route path="/Startups" component={Startups} />

      </Fragment>
    );
  }
}