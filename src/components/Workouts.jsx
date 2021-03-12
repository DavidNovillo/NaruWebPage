import React from "react";
import { Component } from "react";

class Workouts extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.id = "btwb_config";
    script.type = "text/javascript";
    script.dataset.api_key = "16550b068342c6ccf1957b68170fab29";
    script.src = "https://static.btwb.com/libs/webwidgets/2/webwidgets.js";
    this.div.appendChild(script);
  }

  render() {
    const fondos = ["fondo-1", "fondo-2", "fondo-3", "fondo-4"];
    const fondo = Math.floor(Math.random() * 4);
    console.log(fondos[fondo]);
    return (
      <div className="Workouts" ref={(el) => (this.div = el)}>
        <div
          className={"btwb_webwidget workouts-section " + fondos[fondo]}
          data-type="wods"
          data-sections="main"
          data-track_ids={644257}
          data-activity_length="0"
          data-leaderboard_length="0"
          data-days="1"
          data-date={this.props.fecha}
          title="wod"
        ></div>
        <div
          className="btwb_webwidget actividades-section"
          data-type="activities"
          data-length="10"
        ></div>
      </div>
    );
  }
}
export default Workouts;
