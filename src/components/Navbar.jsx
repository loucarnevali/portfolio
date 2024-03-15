import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { LanguageContext } from './Utils/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitch from './Utils/LanguageSwitch';
import HamburgerMenu from './Utils/HamburgerMenu';
import '../styles/Navbar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { languageData } = useContext(LanguageContext);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // To scroll to top of page
  const handleScrollToTop = () => {
    if (pathname === '/' || pathname === '/about' || pathname === '/projects') {
      window.scrollTo(0, 0);
    }
  };

  //Effect to close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.navbar-container')) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.body.addEventListener('mousedown', handleOutsideClick);
      window.addEventListener('touchmove', handleOutsideClick);
    }

    return () => {
      document.body.removeEventListener('mousedown', handleOutsideClick);
      window.removeEventListener('touchmove', handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar-container">
      {/* Navbar Menu */}
      <div
        className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <ul className="navbar-items">
          <li>
            <Link to="/" onClick={handleScrollToTop}>
              {languageData.home}
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleScrollToTop}>
              {languageData.about}
            </Link>
          </li>
          <li>
            <Link to="/#skills-section">Skills</Link>
          </li>
          <li>
            <Link to="/projects" onClick={handleScrollToTop}>
              {languageData.projects}
            </Link>
          </li>
          <li>
            <Link to="#contact-footer">{languageData.contact}</Link>
          </li>
        </ul>
      </div>

      {/* Language Button */}
      <LanguageSwitch />

      {/* Menu Hamburger */}
      <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default NavBar;
