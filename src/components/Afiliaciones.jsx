import React from "react";

function Afiliaciones() {
  return (
    <div className="afiliaciones-section">
      <h2>NUESTRAS AFILICACIONES</h2>
      <a href="https://kids.crossfit.com">
        <img
          className="afiliaciones"
          src="http://media.crossfit.com/badges/CFK_logo_v_tag_color_lightbg.png"
          alt=""
        />
      </a>
      <a
        href="http://journal.crossfit.com/start.tpl?version=CFJ-graphic300x150"
        title="CrossFit Journal: The Performance-Based Lifestyle Resource"
      >
        <img
          className="afiliaciones"
          src="http://journal.crossfit.com/templates/images/graphic-300x150.jpg"
          width="300px"
          height="150px"
          alt="CrossFit Journal: The Performance-Based Lifestyle Resource"
        />
      </a>

      <a href="http://beyondthewhiteboard.com">
        <img
          className="afiliaciones"
          src="/images/btwb.png"
          alt=""
          height="70px"
        />
      </a>
    </div>
  );
}

export default Afiliaciones;
