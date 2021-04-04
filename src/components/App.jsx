import React from "react";
import Footer from "./Footer";
import HomeSection from "./HomeSection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QuienesSomos from "./QuienesSomos";
import Galeria from "./Galeria";
import PreciosYHorarios from "./PreciosYHorarios";
import ProgramaGrupal from "./programas/ProgramaGrupal";
import Contacto from "./Contacto";
import ProgramaOnline from "./programas/ProgramaOnline";
import Workouts from "./Workouts";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomeSection} />
          <Route path="/quienes-somos" component={QuienesSomos} />
          <Route path="/galeria" component={Galeria} />
          <Route path="/precios-y-horarios" component={PreciosYHorarios} />
          <Route path="/workouts" component={Workouts} />
          <Route path="/programa-grupal" component={ProgramaGrupal} />
          <Route path="/programa-online" component={ProgramaOnline} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
