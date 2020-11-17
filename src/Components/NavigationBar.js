import React from "react";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/NavBar";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background: #ee0979; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #ff6a00,
      #ee0979
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #ff6a00,
      #ee0979
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: white;
    &:hover {
      color: #0394fc;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <NavBar expand="lg">
      <NavBar.Brand href="/">Code Life</NavBar.Brand>
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  </Styles>
);
