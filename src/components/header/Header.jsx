import useResize from '../../hooks/useResize';
import Navbar from '../navbar/Navbar';
import './header.css';

const Header = () => {
  const { screenSize } = useResize()

  return (
    <header className="header">

      <div className="header-link">
        <span>
          <a href="/">
            {screenSize < 768 ? "Sumate al equipo de Focus On Kids" : "Si queres sumarte al equipo de Focus On Kids, envíanos tu CV"}
          </a>
          📰📌
        </span>
      </div>

        {screenSize >= 768 
          ? (
            <>
              <div className="header-items-desk">
                <div>
                  <img src="/assets/img/logo/logofok.png" alt="Focus On Kids logo" />
                </div>
                <div>
                íconos de acciones
                  {/* <img src="/assets/img/ico/buscar.svg" alt="Search icon" /> */}
                </div>
              </div>
              <Navbar />
            </>
          ) 
          : (
            <div className="header-items">
              <Navbar />
              <div>
                <img src="/assets/img/logo/logofok.png" alt="Focus On Kids logo" />
              </div>
              <div>
              íconos de acciones
                {/* <img src="/assets/img/ico/buscar.svg" alt="Search icon" /> */}
              </div>
            </div>
          )
        }

      <div className="header-hr"></div>

    </header>
  );
}

export default Header;
