import React from 'react';
import './Footer.scss';
import { faWhats } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  const whatsppText = 'https://api.whatsapp.com/send?phone=573007749639&text=Buenos%20d%C3%ADas%2C%20Quisiera%20contratar%20sus%20servicios'

  return (
    <div className="Footer">
      <div className="Footer__Contact">
        <div className="Footer__Contact--Data">
          <span>Calle 93A No. 14 - 17 - Of. 308</span>
          <span>Telefonos: 805 23 23 - 611 08 82</span>
          <span>Celular: 300 774 9639 <FontAwesomeIcon className="faWhatsapp" icon={faWhatsapp} /></span>
          <span>Centro 93 Torre Norte - Bogota</span>
          <span>Email: hercon_consultoria@hotmail.com</span>
        </div>
        <div className="Footer__Contact--Whatsapp">
          <a href={whatsppText} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="faWhatsapp" icon={faWhatsapp} /></a>
        </div>
      </div>
      <div className="Footer__Legal">
        <p>
          Copyright Lawyers Enterprise. All Rights Reserved
          </p>
      </div>
    </div>
  )

}

export default Footer;