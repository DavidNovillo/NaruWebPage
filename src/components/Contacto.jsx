import React from "react";
import Header from "./Header";
import CustomForm from "./CustomForm";

function Contacto() {
  return (
    <div className="contacto-section">
      <Header />
      <h2>CONTÁCTANOS</h2>
      <br />
      <br />
      <h4>Agenda tu clase de prueba gratis</h4>
      <div className="zoom-form contacto">
        <CustomForm />
      </div>
    </div>
  );
}

export default Contacto;
