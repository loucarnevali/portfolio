import PropTypes from 'prop-types';
import '../../styles/HamburgerMenu.css';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`menu-hamburger ${isOpen ? 'open' : ''}`}
      onClick={toggleMenu}
    >
      <img className="menu-icon" src="/img/frame-icon.jpg" alt="Menu Icon" />

      {/* Close Menu Button  */}
      {isOpen && (
        <button className="close-button">
          <img src="/img/close-menu.svg" alt="Close Menu Icon" />
        </button>
      )}
    </div>
  );
};

//PropTypes Validation
HamburgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
export default HamburgerMenu;
