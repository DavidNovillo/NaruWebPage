import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function HorariosOnline() {
  return (
    <div className="horarios-online-section">
      <h3>HORARIOS - ONLINE</h3>
      <div className="black-square">
        <Container fluid>
          <Row className="justify-content-xl-center">
            <Col xl={2} lg={3} md={4} style={{ marginTop: "20px" }}>
              <h4>Lunes</h4>
              <p>07H30 - 08H30</p>
              <p>18H00 - 19H00</p>
              <p>20H00 - 21H00</p>
            </Col>
            <Col xl={2} lg={3} md={4} style={{ marginTop: "20px" }}>
              <h4>Martes</h4>
              <p>07H30 - 08H30</p>
              <p>18H00 - 19H00</p>
              <p>20H00 - 21H00</p>
            </Col>
            <Col xl={2} lg={3} md={4} style={{ marginTop: "20px" }}>
              <h4>Miércoles</h4>
              <p>07H30 - 08H30</p>
              <p>18H00 - 19H00</p>
              <p>20H00 - 21H00</p>
            </Col>
            <Col xl={2} lg={3} md={4} style={{ marginTop: "20px" }}>
              <h4>Jueves</h4>
              <p>07H30 - 08H30</p>
              <p>18H00 - 19H00</p>
              <p>20H00 - 21H00</p>
            </Col>
            <Col xl={2} lg={3} md={4} style={{ marginTop: "20px" }}>
              <h4>Viernes</h4>
              <p>07H30 - 08H30</p>
              <p>18H00 - 19H00</p>
              <p>20H00 - 21H00</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HorariosOnline;
