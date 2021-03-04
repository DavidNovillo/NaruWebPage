import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Crossfit() {
  return (
    <div className="crossfit-section">
      <h2>¿QUÉ ES CROSSFIT?</h2>
      <br />
      <br />
      <Container fluid>
        <Row>
          <Col xl={3} lg={6} md={12} className="black-square">
            <h4>La clave para la salud y estar en forma</h4>
            <br />
            <p>
              Crossfit es un estilo de vida que se caracteriza por ejercicios
              seguros, efectivos y una buena nutrición.
            </p>
          </Col>
          <Col xl={3} lg={6} md={12} className="black-square">
            <h4>Los ejercicios</h4>
            <br />
            <p>
              La magia está en el movimiento. Los ejercicios de Crossfit son
              diferentes cada día y pueden ser modificados para ayudar a cada
              atleta a conseguir su objetivo. Los ejercicios pueden ser
              adaptados para personas de cualquier edad y cualquier nivel de
              estado físico.
            </p>
          </Col>
          <Col xl={3} lg={6} md={12} className="black-square">
            <h4>¿Es Crossfit para mí?</h4>
            <br />
            <p>
              Si, todos pueden hacer Crossfit independiente de la edad, lesiones
              o de su condición física. La programación es modificada para
              ayudar a cada persona a mejorar su estado físico de manera segura.
            </p>
          </Col>
          <Col xl={3} lg={6} md={12} className="black-square">
            <h4>La comunidad</h4>
            <br />
            <p>
              Tu red de apoyo. Con más de 15.000 afiliados al rededor del mundo,
              las personas se motivan y se alientan entre ellos en cada clase
              mientras van cumpliendo sus objetivos. Empieza a entrenar con
              amigos, haz nuevos amigos. La diversion está en la comunidad
            </p>
          </Col>
        </Row>
      </Container>

      <Button
        href="https://www.crossfit.com/what-is-crossfit/"
        variant="primary"
        type="button"
        className="custom-button"
        target="_blank"
      >
        CONOCER MÁS
      </Button>
    </div>
  );
}

export default Crossfit;
