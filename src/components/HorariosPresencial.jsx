import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function HorariosPresencial() {
  return (
    <div className="horarios-section">
      <h3>HORARIOS - PRESENCIAL</h3>
      <div className="black-square">
        <Container fluid>
          <Row className="justify-content-xl-center">
            <Col xl={2} lg={3} md={4} style={{ marginTop: "20px" }}>
              <h4>Lunes</h4>
              <p>06H30 - 07H30</p>
              <p>08H00 - 09H00</p>
              <p>16H00 - 17H00</p>
              <p>17H00 - 18H00</p>
              <p>18H30 - 19H30</p>
              <p>19H30 - 20H30</p>
            </Col>
            <Col xl={2} lg={3} md={4} style={{ marginTop: "20px" }}>
              <h4>Martes</h4>
              <p>06H30 - 07H30</p>
              <p>08H00 - 09H00</p>
              <p>16H00 - 17H00</p>
              <p>17H00 - 18H00</p>
              <p>18H30 - 19H30</p>
              <p>19H30 - 20H30</p>
            </Col>
            <Col xl={2} lg={3} md={4} style={{ marginTop: "20px" }}>
              <h4>Miércoles</h4>
              <p>06H30 - 07H30</p>
              <p>08H00 - 09H00</p>
              <p>16H00 - 17H00</p>
              <p>17H00 - 18H00</p>
              <p>18H30 - 19H30</p>
              <p>19H30 - 20H30</p>
            </Col>
            <Col xl={2} lg={3} md={4} style={{ marginTop: "20px" }}>
              <h4>Jueves</h4>
              <p>06H30 - 07H30</p>
              <p>08H00 - 09H00</p>
              <p>16H00 - 17H00</p>
              <p>17H00 - 18H00</p>
              <p>18H30 - 19H30</p>
              <p>19H30 - 20H30</p>
            </Col>
            <Col xl={2} lg={3} md={4} style={{ marginTop: "20px" }}>
              <h4>Viernes</h4>
              <p>06H30 - 07H30</p>
              <p>08H00 - 09H00</p>
              <p>16H00 - 17H00</p>
              <p>17H00 - 18H00</p>
              <p>18H30 - 19H30</p>
              <p>19H30 - 20H30</p>
            </Col>
            <Col xl={2} lg={3} md={4} style={{ marginTop: "20px" }}>
              <h4>Sábado</h4>
              <p>09H00 - 10H00</p>
              <p>10H00 - 11H00</p>
              <p>11H00 - 12H00</p>
            </Col>
          </Row>
        </Container>
      </div>
      <p>
        *Tenemos clases de técnica los días jueves a las 16H00 y 17H00, los días
        sábado a las 09H00
      </p>
    </div>
  );
}

export default HorariosPresencial;
