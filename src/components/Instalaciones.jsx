import React from "react";
import { Carousel } from "react-bootstrap";

function Instalaciones() {
  return (
    <div className="instalaciones-section">
      <h2>NUESTRAS INSTALACIONES</h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/images/instalacion1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/images/instalacion2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/images/instalacion3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-img"
            src="/images/instalacion4.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Instalaciones;
