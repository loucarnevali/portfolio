import { useContext } from 'react';
import { LanguageContext } from './Utils/LanguageContext';
import PropTypes from 'prop-types';
import SocialIcons from './Utils/SocialIcons';
import '../styles/AboutCard.css';

const AboutCard = ({ intro, description }) => {
  const { languageData } = useContext(LanguageContext);

  return (
    <section className="about-card">
      <img
        className="resume-img"
        src="/img/profile-round.png"
        alt="Profile Photo"
      />

      <div className="about-items">
        <p>{languageData.aboutMe}</p>
        <h2>{intro}</h2>
        <p>{description}</p>

        {/* Social Icons */}
        <SocialIcons />
      </div>
    </section>
  );
};

//PropTypes Validation
AboutCard.propTypes = {
  intro: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutCard;
