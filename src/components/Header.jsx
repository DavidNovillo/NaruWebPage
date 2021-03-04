import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  const [navBackground, setNavBackground] = useState(false);

  function isScrolled() {
    window.scrollY > 1 ? setNavBackground(true) : setNavBackground(false);
  }

  const newStyle = {
    width: "80px",
    height: "80px",
    transition: "0.2s ease-in",
  };

  const navStyle = {
    backgroundColor: "transparent",
    position: "static",
    marginBottom: "-136px",
    transition: "background-color 0.3s",
  };

  React.useEffect(() => {
    window.addEventListener("scroll", isScrolled);

    return () => {
      window.removeEventListener("scroll", isScrolled);
    };
  });

  return (
    <header
      style={
        !navBackground
          ? navStyle
          : {
              backgroundColor: "#0a0a0a",
              transition: "0.2s ease-in",
              marginBottom: "0",
            }
      }
    >
      <Navbar
        collapseOnSelect
        expand="xl"
        bg="transparent"
        className="navbar-dark"
      >
        <Navbar.Brand href="/">
          <img
            style={navBackground ? newStyle : { transition: "none" }}
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
            <Nav.Link href="/galeria">Galería</Nav.Link>
            <Nav.Link href="/precios-y-horarios">Precios y Horarios</Nav.Link>
            <Nav.Link
              href="http://beyondthewhiteboard.com"
              target="_blank"
              rel="noreferrer"
            >
              BTWB
            </Nav.Link>
            <NavDropdown title="Programas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/programa-grupal">
                CROSSFIT
              </NavDropdown.Item>
              <NavDropdown.Item href="/programa-online">
                PROGRAMA ONLINE
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                href="https://ecuador.posemethod.com/"
                target="_blank"
                rel="noreferrer"
              >
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
