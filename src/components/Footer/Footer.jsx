import React from 'react';
import './Footer.scss';
import { faWhats } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Instagram = 'https://www.Instagram.com/';
const Twitter = 'https://www.Twitter.com/';
const Facebook = 'https://www.facebook.com/';
const Github = 'https://github.com/AlexanderAlvarez9/platino-abogados';

const Footer = () => {

  const whatsppText = 'https://api.whatsapp.com/send?phone=573007749639&text=Buenos%20d%C3%ADas%2C%20Quisiera%20contratar%20sus%20servicios'

  return (
    <div className="Footer">
      <div className="Footer__Contact">
        <div className="Footer__Contact--Data">
          <div className="Footer__Contact--Data-col">
            <p>Calle 93A No. 14 - 17 - Of. 308</p>
            <p>Telefonos: 805 23 23 - 611 08 82</p>
            <p>Celular: 300 774 9639 <FontAwesomeIcon className="faWhatsapp" icon={faWhatsapp} /></p>
          </div>
          <div className="Footer__Contact--Data-col">
            <p>Centro 93 Torre Norte - Bogota</p>
            <p>Email: hercon_consultoria@hotmail.com</p>
          </div>
        </div>
        <div className="Footer__Contact--Whatsapp">
          <a href={whatsppText} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="faWhatsapp" icon={faWhatsapp} /></a>
        </div>
      </div>
      <div className="Footer__Legal">
        <p>Copyright Lawyers Enterprise. All Rights Reserved</p>
        <div className="Footer--social-networks">
          <a href={Instagram} title="Instagram" target="_blank" className="socialIcon"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href={Twitter} title="Twitter" target="_blank" className="socialIcon"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href={Facebook} title="Whatsapp" target="_blank" className="socialIcon"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href={Github} title="Github" target="_blank" className="socialIcon"><FontAwesomeIcon icon={faGithub} /></a>
        </div>

      </div>
    </div>
  )

}

export default Footer;