import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className="customNavbar pt-2 pb-2 px-2" sticky="top">
      <Navbar.Brand href="#home">
        <img
          src="/Adler-white.svg"
          alt="Adler Gebäude Reinigung Logo"
          width="160"
          height="50"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto pl-3 pr-3">
          <Nav.Link className="text-light nav-link" href="#home">
            <Link to="home" smooth={true} offset={-70} duration={500}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link className="text-light nav-link" href="#services">
            <Link to="services" smooth={true} offset={-80} duration={500}>
              Dienstleistungen
            </Link>
          </Nav.Link>
          <Nav.Link className="text-light nav-link" href="#contact">
            <Link to="contact" smooth={true} offset={-70} duration={500}>
              Buchen
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
