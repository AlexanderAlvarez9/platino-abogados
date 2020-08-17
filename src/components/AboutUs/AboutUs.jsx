import React from 'react';
import './AboutUs.scss'

const AboutUs = () => {

  const gMap = "https://i.pinimg.com/originals/09/0a/63/090a63604e6f58e67a496861fcad41bd.png";

  return (
    <div className="AboutUs">
      <section className="AboutUs__Profile">
        <img className="AboutUs__Profile--Image" src={gMap} alt="Foto" />
        <div className="AboutUs__Profile--Info">
          <span>
            <b>Telefono: </b> 321 321 1234
          </span>
          <span>
            <b>Email: </b> hernandobl@hotmail.com
          </span>
        </div>
      </section>
      <section className="AboutUs__Desc">
        <h1>QUIENES SOMOS</h1>
        <h3>Un equipo comprometido que fusiona criterio e innovación para solucionar tus retos legales</h3>
        <p>Misión</p>
        <p>Visión</p>
        <p>Valores</p>
      </section>
    </div>
  );
};

export default AboutUs;