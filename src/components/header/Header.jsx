import React from 'react';
import './header.css';

const Header = () => {


  return (
    <header className='header'>

      <div className='header-elements'>
        <div className="header-logo">
          <img src="/assets/img/logo/logofok.png" alt="logo" />
        </div>
        <div className="header-iconos">
          <img src="/assets/img/ico/user.svg" alt="" /> 
          <img src="/assets/img/ico/cart.svg" alt="" /> 
          <img src="/assets/img/ico/buscar.svg" alt="" /> 
        </div>
      </div>

      <nav className='header-nav nav'>
        <ul>
          <li className='nav-element'>ACERCA DE</li>
          <li className='nav-element'>SERVICIOS</li>
          <li className='nav-element'>CAPACITACIONES</li>
          <li className='nav-element'>CONTACTO</li>
          <li className='nav-element'>BLOG</li>
        </ul>
      </nav>

    </header>
  );
}

export default Header;
