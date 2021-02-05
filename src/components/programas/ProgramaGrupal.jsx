import React from "react";
import Header from "../Header";

function ProgramaGrupal() {
  return (
    <div className="programas-section">
      <Header />
      <div className="black-square square-margin">
        <h2>PROGRAMA GRUPAL</h2>
        <br />
        <img src="/images/estacion.png" alt="" className="photos" />
        <br />
        <br />
        <p>
          Naru CrossFit está ubicado en la zona centro-norte de Quito, ponemos a
          tu disposición un grupo de instructores de alto nivel quienes se
          capacitan de manera permanente para ofrecerte el mejor entrenamiento.
          <br />
          <br />
          Las estaciones de trabajo indiciduales son de 11.82 metros cuadrados y
          cuentan con todo el equipo necesario para el trabajo de nuestros
          atletas. Contamos con un protocolo de bioseguridad que garantiza un
          distanciamiento entre atletas de 4 metros.
          <br />
          <br />
          Contamos con amplios espacios para parqueaderos y guardianía
          permanente 24 horas.
        </p>
      </div>
    </div>
  );
}

export default ProgramaGrupal;
