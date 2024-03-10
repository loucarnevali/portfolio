import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../styles/ButtonCustomLink.css';

const ButtonCustomLink = ({ to, buttonText }) => {
  // To scroll to the top of the page
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link to={to} className="see-more" onClick={handleScrollToTop}>
      <p>{buttonText}</p>
      <img src="/img/projects-img/arrow.svg" alt="Arrow Icon" />
    </Link>
  );
};

//PropTypes Validation
ButtonCustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ButtonCustomLink;
