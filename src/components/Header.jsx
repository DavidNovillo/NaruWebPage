import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

function Header() {
  const [navBackground, setNavBackground] = useState(false);

  function isScrolled() {
    window.scrollY > 1 ? setNavBackground(true) : setNavBackground(false);
  }

  const newStyle = {
    width: "80px",
    height: "80px",
    transition: "0.3s ease-in",
  };

  const navStyle = {
    backgroundColor: "transparent",
    position: "static",
    marginBottom: "-136px",
    transition: "background-color 0.3s",
  };

  const showFloatingButtons = {
    opacity: "100%",
    transition: "0.3s ease-in",
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
              transition: "0.3s ease-in",
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
            <Nav.Link href="/workouts">WORKOUTS</Nav.Link>
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
            <Nav.Link
              href="https://naru-crossfit.triib.com/contact/"
              target="_blank"
              rel="noreferrer"
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <a
        href="https://crossfit.regfox.com/quitojanuary2022"
        className="floating-link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="http://www.crossfit.com/cf-assets/CF_L1_ANSI_logo_wht.png"
          alt="Corssfit L1.jpeg"
        />
      </a>
      <div
        className="floating-buttons"
        style={
          navBackground
            ? showFloatingButtons
            : { opacity: "0%", transition: "0.3s ease-out" }
        }
      >
        <Button
          className="custom-button"
          href="https://naru-crossfit.triib.com/free-trial/"
          target="_blank"
        >
          CLASE DE PRUEBA
        </Button>
        <Button
          className="custom-button"
          href="https://naru-crossfit.triib.com/drop-in/"
          target="_blank"
        >
          DROP IN
        </Button>
      </div>
    </header>
  );
}

export default Header;
