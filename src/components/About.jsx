import { useContext } from 'react';
import { LanguageContext } from './Utils/LanguageContext';
import '../styles/About.css';

const About = () => {
  const { languageData } = useContext(LanguageContext);

  return (
    <section className="about-card" id="about-section">
      <img className="resume-img" src="/img/photo-cv.jpg" alt="Profile Photo" />
      <h1 className="subtitle">{languageData.about}</h1>

      {/* Resume button */}
      <div className="about-items">
        <p>{languageData.aboutMe}</p>
        <h2>{languageData.aboutIntro}</h2>
        <p>{languageData.aboutDescription}</p>

        {/* Resume button */}
        <div>
          <a
            className="resume-button"
            href="/assets/ResumeLouiseCarnevali.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="image-container">
              <img src="/img/resume-icon.svg" alt="" />
            </div>
            {languageData.resumeButton}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
