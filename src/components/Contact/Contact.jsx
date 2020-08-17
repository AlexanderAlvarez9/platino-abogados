import React from 'react';
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {

  const gMap = "https://i.pinimg.com/originals/09/0a/63/090a63604e6f58e67a496861fcad41bd.png";

  return (
    <div className="Contact">
      <section className="Contact__Profile">
        <h1>Mapa</h1>
        <div className="Contact__Profile--Info">
          <p>Calle 93A No. 14 - 17 - Of. 308</p>
          <p>Centro 93 Torre Norte - Bogota</p>
        </div>
      </section>
      <section className="Contact__Desc">
        <h2>Contactanos</h2>
        <p>Telefonos: 805 23 23 - 611 08 82</p>
        <p>Celular: 300 774 9639 <FontAwesomeIcon className="faWhatsapp" icon={faWhatsapp} /></p>
        <p>Email: hercon_consultoria@hotmail.com</p>
      </section>
    </div>
  );
};

export default Contact;