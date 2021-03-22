import React from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import Protocolos from "./Protocolos";
import Crossfit from "./Crossfit";
import Afiliaciones from "./Afiliaciones";

function HomeSection() {
  return (
    <div>
      <div className="home-section">
        <Header />
        <div className="left-offset">
          <h1>NARU CROSSFIT</h1>
          <p>
            Naru CrossFit es un lugar donde desarrollarás tus capacidades
            físicas de manera óptima. Transfórmate en una persona nueva,
            funcional, sana.
          </p>
          <Button
            href="https://naru-crossfit.triib.com/free-trial/"
            variant="primary"
            type="button"
            className="custom-button"
            target="_blank"
          >
            AGENDAR CLASE DE PRUEBA
          </Button>
          <Button
            href="https://naru-crossfit.triib.com/drop-in/"
            variant="outline-primary"
            type="button"
            className="custom-button custom-outline"
            target="_blank"
          >
            DROP IN
          </Button>
        </div>
        <div className="black-triangle"></div>
      </div>
      <Protocolos />
      <Crossfit />
      <Afiliaciones />
    </div>
  );
}

export default HomeSection;
