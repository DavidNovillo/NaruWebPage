import React, { useState } from "react";
import Workouts from "./Workouts";
import Header from "./Header";

function WebWod() {
  const [wodSize, setWodSize] = useState("Inicial");
  const [wodDate, setWodDate] = useState("");

  window.onload = (event) => {
    setWodSize(document.getElementById("wod").innerText);
    wodSize.substring(0, 7) !== "Nothing"
      ? setWodDate("")
      : setWodDate("2021-3-5");
  };

  React.useEffect(() => {
    setWodSize(document.getElementById("wod").innerText);
  }, [wodSize]);

  return (
    <div>
      <Header />
      <div id="wod">
        <Workouts fecha="" />
      </div>
    </div>
  );
}

export default WebWod;
