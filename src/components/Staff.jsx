import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Staff() {
  return (
    <div className="staff-section">
      <h2>NUESTRO STAFF</h2>
      <Container fluid />
      <Row className="justify-content-center">
        <Col xl={6} lg={12} sm={12} className="bottom-margin">
          <div id="photo-jorge">
            <img src="/images/Jorge.jpg" alt="" className="photos" />
          </div>
          <h4>Jorge Cárdenas</h4>
          <p>Head Coach</p>
          <div className="photos-text">
            <p>
              <b>Certificaciones:</b>
              <br />
              CF Trainer Lvl 1<br />
              CF Kids Trainer
              <br />
              Pose Method
              <br />
              Precision Nutrition
            </p>
          </div>
        </Col>
        <Col xl={6} lg={12} className="bottom-margin">
          <div id="photo-leo">
            <img src="/images/Leo.png" alt="" className="photos" />
          </div>
          <h4>Leandro Haro</h4>
          <p>Coach</p>
          <div className="photos-text">
            <p>
              <b>Certificaciones:</b>
              <br />
              CF Trainer Lvl 1<br />
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={6} lg={12} className="bottom-margin">
          <div id="photo-antonieta">
            <img src="/images/Antonieta.png" alt="" className="photos" />
          </div>
          <h4>María Antonieta</h4>
          <p>Coach</p>
          <div className="photos-text">
            <p>
              <b>Certificaciones:</b>
              <br />
              CF Trainer Lvl 1<br />
            </p>
          </div>
        </Col>
        <Col xl={6} lg={12} className="bottom-margin">
          <div id="photo-mauricio">
            <img src="/images/Mauricio.png" alt="" className="photos" />
          </div>
          <h4>Mauricio Mera</h4>
          <p>Coach</p>
          <div className="photos-text">
            <p>
              <b>Certificaciones:</b>
              <br />
              CF Trainer Lvl 1<br />
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Staff;
