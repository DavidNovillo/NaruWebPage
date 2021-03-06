import Button from "react-bootstrap/Button";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container fluid />
      <Row>
        <Col xl={4} lg={6} md={12}>
          <div className="container-footer">
            <div>
              <img className="logo" src="/images/naru1.jpg" alt="" />
            </div>
            <div className="naru-crossfit">
              <h4>NARU CROSSFIT</h4>
              <p>Libera tu mente</p>
            </div>
          </div>
          <br />
          <iframe
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1677.506099940651!2d-78.48586428044347!3d-0.1514653166324063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59aae39552a6b%3A0x851867ed98138ce5!2sNaru%20CrossFit!5e0!3m2!1sen!2sec!4v1611331074700!5m2!1sen!2sec"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: "0", borderRadius: "8px" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            target="_blank"
            rel="noreferrer"
          ></iframe>
          <br />
          <br />
        </Col>
        <Col xl={1} lg={1}></Col>
        <Col xl={3} lg={5} md={12} className="top-padding">
          <p>
            <FaPhoneAlt /> 0985539433
          </p>
          <p>
            <FaEnvelope /> info@narucrossfit.com
          </p>
          <a
            href="https://maps.google.com/maps?ll=-0.151379,-78.485665&z=17&t=m&hl=en&gl=EC&mapclient=embed&daddr=Naru%20CrossFit%20Los%20Cactus%20Oe1-170%20y%20Quito%20170512@-0.1513788,-78.4856648"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>
              <FaMapMarkerAlt /> Av. Naciones Unidas y Av. de los Shyris, Quito,
              Ecuador
              <br />
              (Ingreso por el Boulevard de la Naciones Unidas)
            </p>
          </a>
          <br />
          <p className="center-text">¿Tienes alguna duda?</p>
          <Button
            href="https://api.whatsapp.com/send?phone=593985539433"
            className="whatsapp-button"
            variant="success"
            target="_blank"
          >
            <FaWhatsapp className="icono-whatsapp" /> CONTÁCTANOS
          </Button>
        </Col>
        <Col xl={1}></Col>
        <Col className="top-padding">
          <p className="center-text">
            Síguenos en:
            <br />
            <a
              href="https://www.facebook.com/NaruCrossFit/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare className="footer-icons" />
            </a>
            <a
              href="https://www.instagram.com/narucrossfit/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagramSquare className="footer-icons" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC26bQJb0hpYqNzxACg4spFA"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutubeSquare className="footer-icons" />
            </a>
          </p>
        </Col>
      </Row>
      <p className="copyright center-text">© Copyright {year} Naru Crossfit</p>
    </footer>
  );
}

export default Footer;
