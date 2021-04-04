import React, { useState } from "react";

function Aviso() {
  const [isOpen, setIsOpen] = useState(true);
  function handleClose() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      {isOpen && (
        <div className="popup-box">
          <div className="popup-box_box">
            <span className="popup-box_close-icon" onClick={handleClose}>
              <b>X</b>
            </span>
            <h3>ABRIL - ONLINE</h3>
            <p>
              Volvemos a la modalidad online mientras dure el estado de
              excepción.
              <br />
              Acataremos las disposiciones del COE, sabemos que la actividad
              física ES PARTE DE LA SOLUCIÓN, sin embargo somos conscientes de
              la situación actual de la ciudad, es por esto que no tendremos
              entrenamiento presencial mientras las autoridades no dispongan
              nuestro retorno al box.
              <br />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Aviso;
