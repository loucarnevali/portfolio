import { useContext } from 'react';
import { LanguageContext } from './Utils/LanguageContext';
import SocialIcons from './Utils/SocialIcons';
import '../styles/AboutCard.css';

const AboutCard = () => {
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
        <h2>{languageData.aboutIntro}</h2>
        <p>{languageData.aboutDescription}</p>

        {/* Social Icons */}
        <SocialIcons />
      </div>
    </section>
  );
};

export default AboutCard;
