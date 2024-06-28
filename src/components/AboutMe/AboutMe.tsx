import React from "react";
import myPhoto from '../../assets/Images/kathy.jpeg'
import "./AboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-container">
      <div className="photo-container">
        <img className="photo" src={myPhoto} alt=""/>
      </div>
      <div>
        <h2>About Me</h2>
        <p>
          ¡Hola! Soy Katherine. Apasionada por aprender y
          explorar, buscando siempre crecer personalmente y contribuir
          positivamente en todo lo que hago.
          Disfruto de la naturaleza, la compañia y las
          aventuras que enriquecen mi vida diaria.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
