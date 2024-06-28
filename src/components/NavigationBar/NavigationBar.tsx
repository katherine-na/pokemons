import React, { useState } from "react";
import AboutMe from "../AboutMe/AboutMe";
import "./NavigationBar.css";

const NavigationBar: React.FC = () => {
  const [showComponent, setShowComponent] = useState<boolean>(false);

  const showComponents = (opcion: string) => {
    if (opcion === "sobreMi") {
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  };

  return (
    <div className="navigation-bar">
      <ul>
        <li>
          <button onClick={() => showComponents("sobreMi")}>Sobre Mi</button>
        </li>
        <li>
          <button onClick={() => showComponents("pokemones")}>Pokemones</button>
        </li>
      </ul>

      {showComponent ? <AboutMe /> : ""}
    </div>
  );
};

export default NavigationBar;
