import React from "react";
import Precios from "./Precios";
import Horarios from "./Horarios";

function PreciosYHorarios() {
  return (
    <div>
      <Precios />
      <Horarios />
      <h2 style={{ textAlign: "center", padding: "30px 0 20px" }}>CRONOGRAMA</h2>
      <iframe
        style={{ backgroundColor: "black" }}
        id="blockrandom"
        name="iframe"
        src="https://naru-crossfit.triib.com/schedule-embed/"
        width="100%"
        height="900"
        scrolling="yes"
        frameborder="1"
        class="wrapper"
        title="schedule"
      ></iframe>
    </div>
  );
}

export default PreciosYHorarios;
