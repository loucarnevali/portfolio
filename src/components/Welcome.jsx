import { useContext } from 'react';
import { LanguageContext } from './Utils/LanguageContext';
import '../styles/Welcome.css';

const Home = () => {
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
          <img src="/img/perfil1.png" alt="" />
        </div>

        <div className="home-card">
          {/* Welcome message */}
          <p>{languageData.welcome}</p>
          <h2>{languageData.homeIntro}</h2>
          <p>{languageData.homeDescription}</p>

          <div className="home-items">
            {/* Resume Button */}
            <div className="home-button">
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

            {/* Social icons */}
            <div className="home-icons">
              <ul>
                <li>
                  <a
                    className="social-icons"
                    href="mailto:carnevali.tech@gmail.com"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/email-icon.svg" alt="Email Icon" />
                  </a>
                </li>
                <li>
                  <a
                    className="social-icons"
                    href="https://github.com/loucarnevali"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/github-icon.svg" alt="Github Icon" />
                  </a>
                </li>
                <li>
                  <a
                    className="social-icons"
                    href="https://www.linkedin.com/in/louisecarnevali/?locale=en_US"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/linkedin-icon.svg" alt="Linkedin Icon" />
                  </a>
                </li>
                <li>
                  <a
                    className="social-icons"
                    href="https://medium.com/@carnevali.tech"
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/img/medium-icon.svg" alt="Medium Icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <hr className="separator-line" />
    </section>
  );
};
export default Home;
