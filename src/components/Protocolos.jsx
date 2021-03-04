import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  GiMouse,
  GiTap,
  GiRunningShoe,
  GiWeightLiftingDown,
  GiWeightLiftingUp,
  GiPerson,
  GiShield,
} from "react-icons/gi";
import {
  RiInfraredThermometerFill,
  RiHandSanitizerFill,
  RiSurgicalMaskFill,
  RiArrowUpDownLine,
} from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { CgGym } from "react-icons/cg";

function Protocolos() {
  return (
    <div className="protocolos">
      <h2>
        <br />
        PROTOCOLOS DE
        <br />
        BIOSEGURIDAD
      </h2>
      <Container fluid>
        <Row className="justify-content-left">
          <Col xl={5} className="blue-square">
            <br />
            <p>
              <GiMouse className="iconos-protocolo" /> Reserva en línea tu
              espacio y horario
            </p>
            <p>
              <GiTap className="iconos-protocolo" /> Lavado de manos posterior
              al ingreso
            </p>
            <p>
              <GiRunningShoe className="iconos-protocolo" /> Desinfección de
              calzado
            </p>
            <p>
              <RiInfraredThermometerFill className="iconos-protocolo" /> Control
              de temperatura
            </p>
            <p>
              <GiWeightLiftingDown className="iconos-protocolo" />
              Estación de entrenamiento individual
            </p>
            <p>
              <RiArrowUpDownLine className="iconos-protocolo" />
              Carril de circulación delimitado
            </p>
            <p>
              <RiHandSanitizerFill className="iconos-protocolo" /> Insumos de
              desinfección individuales
            </p>
            <p>
              <CgGym className="iconos-protocolo" />
              Implementos deportivos individuales
            </p>
            <p>
              <RiSurgicalMaskFill className="iconos-protocolo" /> Uso constante
              de mascarilla
            </p>
            <p>
              <IoIosPeople className="iconos-protocolo" /> Máximo 12 personas
              por clase
            </p>
          </Col>
          <Col xl={1} lg={12}></Col>

          <Col xl={6} lg={12} className="blue-square">
            <br />
            <h3>RESPONSABILIDAD COMPARTIDA</h3>
            <br />
            <div className="foto-protocolos"></div>
            <br />
            <p>
              <div className="iconos-protocolo">
                <GiPerson />
                <GiPerson />
              </div>
              4 metros de distanciamiento
            </p>
            <p>
              <div className="iconos-protocolo">
                <GiWeightLiftingUp />
                <GiShield />
              </div>
              Equipo de protección personal para entrenador
            </p>
            <p>
              <div className="iconos-protocolo">
                <GiWeightLiftingUp />
                <GiWeightLiftingDown />
              </div>
              Zona segura para entrenador a 2 metros de los atletas
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Protocolos;
