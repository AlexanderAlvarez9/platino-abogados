import React from 'react';
import './Services.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";

const Services = () => {

  const gMap = "https://i.pinimg.com/originals/09/0a/63/090a63604e6f58e67a496861fcad41bd.png";

  return (
    <div className="Services">
      <section className="Services__Profile">
        <img className="Services__Profile--Image" src={gMap} alt="Foto" />
        <div className="Services__Profile--Info">
          <span>
            <b>Telefono: </b> 321 321 1234
          </span>
          <span>
            <b>Email: </b> hernandobl@hotmail.com
          </span>
        </div>
      </section>
      <section className="Services__Desc">
        <h1>Servicios</h1>

        <p>Derecho Comercial</p>
        <p>Derecho Laboral</p>
        <p>Administración Inmobiliaria</p>
        <p>Derecho de Familia</p>
        <p>Derecho Ambiental</p>
        <p>Cobro de Cartera</p>
        <p>Acciones de Tutela y Derechos de Petición</p>
        <p>Registro de Marcas y Patentes</p>
        <p>Protección del Consumidor</p>
        <p>Asesorías LGBTI</p>
        <p>Licencia Fabricación Derivados del Cannabis</p>
        <p>Registro Sanitario INVIMA</p>
        <p>Derecho Privado</p>

      </section>
    </div>
  );
};

export default Services;