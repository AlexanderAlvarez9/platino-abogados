import React, { useContext } from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';
// import Logo from 'https://static.wixstatic.com/media/dfd9a9_40554f14381f49cd9ca16939b97bda10~mv2.jpg/v1/fill/w_152,h_92,al_c,q_80,usm_0.66_1.00_0.01/logohercon2.webp'

const Header = () => {

  const Logo = 'https://static.wixstatic.com/media/dfd9a9_40554f14381f49cd9ca16939b97bda10~mv2.jpg/v1/fill/w_152,h_92,al_c,q_80,usm_0.66_1.00_0.01/logohercon2.webp';

  return (
    <div className="Header">
      <div className="Header__Logo">
        <img src={Logo} alt="" />
      </div>
      <ul className="Header__Menu">
        <li>Quienes Somos</li>
        <li>Areas de Practica</li>
        <li>Servicios</li>
        <li>Abogados</li>
        <li>Articulos</li>
        <li>Contacto</li>
      </ul>
    </div>
  )
}
export default Header;