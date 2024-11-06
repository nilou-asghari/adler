import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="customNavbar pt-2 pb-2" sticky="top">
      <Navbar.Brand href="#home">
        <img
          src="/Adler-white.svg"
          alt="Logo"
          width="160"
          height="50"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto pl-3 pr-3 ">
          <Nav.Link className="text-light nav-link" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="text-light nav-link" href="#link">
            Dienstleistungen
          </Nav.Link>
          <Nav.Link className="text-light nav-link" href="#link">
            Buchen
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
