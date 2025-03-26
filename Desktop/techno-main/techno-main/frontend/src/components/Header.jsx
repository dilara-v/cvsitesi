import { Link } from "react-router-dom";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header>
      <div className="global-notification">
        <div className="container">
          <p>
            CV 'leriniz artık daha profesyonel duracak!
            <a href="shop.html"> CV ELİNDE</a>
          </p>
        </div>
      </div>
      <div className="header-row">
        <div className="container">
          <div className="header-wrapper">
            <div className="header-mobile">
              <i className="bi bi-list" id="btn-menu"></i>
            </div>
            <div className="header-left">
              <Link to="/" className="logo">LOGO</Link>
            </div>
            <div className="header-center" id="sidebar">
              <nav className="navigation">
                <ul className="menu-list">
                  <li className="menu-list-item">
                    {/* "CV Oluştur" butonu Create.jsx'e yönlendirecek */}
                    <Link to="/create" className="menu-link active">
                      CV Oluştur
                      <i className="bi bi-chevron-down"></i>
                    </Link>
                  </li>
                  <li className="menu-list-item">
                    {/* "Giriş/Kayıt" butonu Contact.jsx'e yönlendirecek */}
                    <Link to="/contact" className="menu-link">
                      Giriş/Kayıt
                    </Link>
                  </li>
                </ul>
              </nav>
              <i className="bi-x-circle" id="close-sidebar"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
