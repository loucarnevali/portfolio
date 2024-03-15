import { useContext } from 'react';
import { LanguageContext } from './Utils/LanguageContext';
import AboutCard from './AboutCard';
import ButtonCustomLink from './Utils/ButtonCustomLink';

import '../styles/AboutSection.css';

const AboutSection = () => {
  //Acess language data from context
  const { languageData } = useContext(LanguageContext);
  return (
    <div id="about-section">
      <div className="about-container">
        <h1 className="subtitle"> {languageData.about}</h1>

        <AboutCard
          intro={languageData.aboutIntroResume}
          description={languageData.aboutDescriptionResume}
        />
      </div>
      <ButtonCustomLink to="/about" buttonText={languageData.moreAboutButton} />
    </div>
  );
};

export default AboutSection;
