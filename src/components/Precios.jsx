import React from "react";
import Header from "./Header";
import { Container, Row, Col } from "react-bootstrap";

function Precios() {
  return (
    <div className="precios-section">
      <div className="blue-gradient">
        <Header />
        <div className="square-margin">
          <h2>PRECIOS</h2>
          <br />
          <br />
          <br />
          <Container fluid>
            <Row className="justify-content-center">
              <Col xl={3} lg={6}>
                <h4>DROP IN</h4>
                <div className="black-square">
                  <h1>$8</h1>
                  <hr className="separador"></hr>
                  <p>Costo por una clase</p>
                </div>
              </Col>
              <Col xl={3} lg={6}>
                <h4>MEMBRESÍA 1</h4>
                <div className="black-square">
                  <h1>$55</h1>
                  <hr className="separador"></hr>
                  <p>3 clases por semana</p>
                </div>
              </Col>
              <Col xl={3} lg={6}>
                <h4>MEMBRESÍA 2</h4>
                <div className="black-square">
                  <h1>$70</h1>
                  <hr className="separador"></hr>
                  <p>6 clases por semana</p>
                </div>
              </Col>
              <Col xl={3} lg={6}>
                <h4>ONLINE</h4>
                <div className="black-square">
                  <h1>$40</h1>
                  <hr className="separador"></hr>
                  <p>Clases por Zoom</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Precios;
