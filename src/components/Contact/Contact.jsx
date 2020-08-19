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
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.1327050628922!2d-74.05152137077489!3d4.677387099787665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a92f350fd3d%3A0xa511f2cbfb341993!2sHercon%20Ltda.!5e0!3m2!1ses-419!2sco!4v1597712832157!5m2!1ses-419!2sco" width="600" height="450" frameBorder="0" style={border:0} allowFullScreen="" aria-hidden="false" tabIndex="0"/> */}
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
    </div >
  );
};

export default Contact;