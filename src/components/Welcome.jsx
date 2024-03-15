import { useContext } from 'react';
import { LanguageContext } from './Utils/LanguageContext';
import '../styles/Welcome.css';
import ResumeButton from './Utils/ResumeButton';
import SocialIcons from './Utils/SocialIcons';

const Welcome = () => {
  const { languageData } = useContext(LanguageContext);

  return (
    <section>
      <div className="home">
        <div className="home-bg">
          <h1 className="title">louise carnevali</h1>
          <p>FullStack Developer</p>
        </div>
      </div>

      <hr className="separator-line" />

      <div className="home-wrapper">
        {/* Profile image */}
        <div className="profile-img">
          <img src="/img/perfil1.png" alt="Perfil Photo" />
        </div>

        <div className="home-card">
          {/* Welcome message */}
          <p>{languageData.welcome}</p>
          <h2>{languageData.homeIntro}</h2>
          <p>{languageData.homeDescription}</p>

          <div className="home-items">
            {/* Resume Button */}
            <ResumeButton />

            {/* Social icons */}
            <SocialIcons />
          </div>
        </div>
      </div>

      <hr className="separator-line" />
    </section>
  );
};
export default Welcome;
