import { React, useEffect, useState } from "react";
import ReactDOM from "react";
import "./index.css";
function Trial() {
  const sensorRadius = 20;
  const [mousePos, setMousePos] = useState({ x: 1, y: 1 });
  function updateCirclePos(event) {
    setMousePos({ x: event.clientX, y: event.clientY });
    console.log(mousePos);
  }

  useEffect(() => {
    const lights = document.getElementsByClassName("light");
    console.log(lights);
    Array.from(lights).forEach((light) => {
      const lightPos = light.getClientRects();
      console.log("lightPos", lightPos);
      //light.style.fill = mousePos.x > 500 ? "yellow" : "blue";
    });
  }, []);
  const trialPath = (
    <path
      fill={mousePos.x > 500 ? "yellow" : "blue"}
      d="M80 75h108v108H80z"
      className="light"
    />
  );
  return (
    <div onMouseMove={(event) => updateCirclePos(event)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="607"
        height="490"
        fill="none"
        viewBox="0 0 607 490"
      >
        <g className="building">
          <path fill="#C4C4C4" d="M0 0h607v490H0z" className="wall" />
          <g className="lights">
            {trialPath}
            <path fill="yellow" d="M375 282h108v108H375z" className="light" />
            <path fill="yellow" d="M80 282h108v108H80z" className="light" />
            <path fill="yellow" d="M375 75h108v108H375z" className="light" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Trial;
