import React from "react";
import HorariosPresencial from "./HorariosPresencial";
import Precios from "./Precios";
import HorariosOnline from "./HorariosOnline";

function PreciosYHorarios() {
  return (
    <div>
      <Precios />
      <HorariosPresencial />
      <HorariosOnline />
    </div>
  );
}

export default PreciosYHorarios;
