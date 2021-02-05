import React from "react";
import Header from "../Header";

function ProgramaOnline() {
  return (
    <div className="programas-section">
      <Header />
      <div className="black-square square-margin">
        <h2>PROGRAMA ONLINE</h2>
        <br />
        <img src="/images/online.png" alt="" className="photos" />
        <br />
        <br />
        <p>
          En Naru CrossFit ofrecemos un programa de entretamiento online, donde
          ponemos a tu disposición un grupo de instructores de alto nivel
          quienes se capacitan de manera permanente para ofrecerte el mejor
          entrenamiento.
          <br />
          <br />
          Las clases se llevan a cabo mediante la plataforma Zoom en los
          horarios que se muestran en la sección de{" "}
          <a href="/precios-y-horarios">
            {" "}
            Precios y Horarios
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default ProgramaOnline;
