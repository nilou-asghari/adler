import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="customNavbar">
      <Navbar.Brand href="#home">
        <img
          src="/Adler-white.svg"
          alt="Logo"
          width="160"
          height="75"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto pl-4 pr-4 ">
          <Nav.Link className="text-light nav-link" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="text-light nav-link" href="#link">
            Dienstleistungen
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
