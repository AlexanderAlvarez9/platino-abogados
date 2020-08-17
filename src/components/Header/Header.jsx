import React, { useContext } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';
// import Logo from 'https://static.wixstatic.com/media/dfd9a9_40554f14381f49cd9ca16939b97bda10~mv2.jpg/v1/fill/w_152,h_92,al_c,q_80,usm_0.66_1.00_0.01/logohercon2.webp'

const Header = () => {

  const Logo = 'https://static.wixstatic.com/media/dfd9a9_40554f14381f49cd9ca16939b97bda10~mv2.jpg/v1/fill/w_152,h_92,al_c,q_80,usm_0.66_1.00_0.01/logohercon2.webp';

  return (
    <div className="Header">
      <div className="Header__Logo">
        <Link to="/"><img src={Logo} alt="" /></Link>
      </div>
      <ul className="Header__Menu">
        <li>
          <Link to="/aboutus">Quienes Somos</Link>
        </li>
        {/* <li>Areas de Practica</li> */}
        <li>
          <Link to="/services">Servicios</Link>
        </li>
        <li>
          <Link to="/lawyer">Abogados</Link>
        </li>
        <li>Articulos</li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </div>
  )
}
export default Header;