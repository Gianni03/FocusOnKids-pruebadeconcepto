import { useState } from "react"
import "./navbar.css"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  const closeNavbarMenu = () => setClick(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-hamburguer" onClick={handleClick}>
          {click ? <img src="/assets/img/ico/close.svg" alt="Close menu" /> : <img src="/assets/img/ico/hamburger.svg" alt="Hamburger menu" /> }
        </div>
        <ul className={click ? "navbar-menu active" : "navbar-menu"}>
          <div className="navbar-menu-close" onClick={handleClick}>
            <img src="/assets/img/ico/close.svg" alt="Close menu" />
          </div>
            <a href="/" className="navbar-links navbar-item" onClick={closeNavbarMenu}>
              ACERCA DE
            </a>
            <a href="/" className="navbar-links navbar-item" onClick={closeNavbarMenu}>
              TEAM
            </a>
            <a href="/" className="navbar-links navbar-item" onClick={closeNavbarMenu}>
              SERVICIOS
            </a>
            <a href="/" className="navbar-links navbar-item" onClick={closeNavbarMenu}>
              CAPACITACIONES
            </a>
            <a href="/" className="navbar-links navbar-item" onClick={closeNavbarMenu}>
              NOVEDADES
            </a>
            <a href="/" className="navbar-links navbar-item" onClick={closeNavbarMenu}>
              CONTACTO
            </a>
            <a href="/" className="navbar-links navbar-item" onClick={closeNavbarMenu}>
              BLOG
            </a>
        </ul>
      </nav>
    </>
  )
}

export default Navbar