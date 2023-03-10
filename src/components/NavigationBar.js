import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavigationBar = ({isLogin}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about" style={{ marginLeft: "10px" }}>
              about us
            </NavLink>
            <NavLink to="contact12" style={{ marginLeft: "10px" }}>
              contact us
            </NavLink>
            <NavLink to="profile" style={{ marginLeft: "10px" }}>
              profile
            </NavLink>
            <NavLink to="users" style={{ marginLeft: "10px" }}>
              users
            </NavLink>
            {!isLogin &&<NavLink to="login" style={{ marginLeft: "10px" }}>
              login
            </NavLink>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
