import React from "react";
import { Component } from "react";
import Header from "./Header";

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
    return (
      <div
        className={
          "Workouts workouts-section " + fondos[Math.floor(Math.random() * 4)]
        }
        ref={(el) => (this.div = el)}
      >
        <Header />
        <div
          className="btwb_webwidget"
          data-type="wods"
          data-sections="main"
          data-track_ids={644257}
          data-activity_length="0"
          data-leaderboard_length="0"
          data-days="1"
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
