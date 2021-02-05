import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="transparent"
        className="navbar-dark"
      >
        <Navbar.Brand href="/">
          <img
            className="logo"
            src="./images/naru2.jpg"
            alt="naru-logo.jpg"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/quienes-somos">Quiénes somos</Nav.Link>
            <Nav.Link href="/precios-y-horarios">Precios y Horarios</Nav.Link>
            <Nav.Link href="http://beyondthewhiteboard.com">BTWB</Nav.Link>
            <NavDropdown title="Programas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/programa-grupal">
                PROGRAMA GRUPAL
              </NavDropdown.Item>
              <NavDropdown.Item href="/programa-online">
                PROGRAMA ONLINE
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://ecuador.posemethod.com/">
                RUNNING
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
