import React, { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomForm from "./CustomForm";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Header from "./Header";
import Protocolos from "./Protocolos";
import Crossfit from "./Crossfit";
import Afiliaciones from "./Afiliaciones";

function HomeSection() {
  const [showForm, setShowForm] = useState(false);

  function HandleClick() {
    setShowForm((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <div className="home-section">
        <Header />
        <Container fluid className="left-offset">
          <Row>
            <Col xl={5} lg={12}>
              <h1>NARU CROSSFIT</h1>
              <p>
                Naru CrossFit es un lugar donde desarrollarás tus capacidades
                físicas de manera óptima. Transfórmate en una persona nueva,
                funcional, sana.
              </p>
              <Button
                onClick={HandleClick}
                variant="primary"
                type="button"
                className="custom-button"
              >
                AGENDAR CLASE DE PRUEBA
              </Button>
            </Col>
            <Col
              xl={{ span: 5, offset: 2 }}
              lg={12}
              className="zoom-form"
              style={{ display: showForm ? "" : "none" }}
            >
              <CustomForm />
            </Col>
          </Row>
        </Container>
        <div className="black-triangle"></div>
      </div>
      <Protocolos />
      <Crossfit />
      <Afiliaciones />
    </div>
  );
}

export default HomeSection;
