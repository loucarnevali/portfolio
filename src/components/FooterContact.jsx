import { useContext } from 'react';
import { LanguageContext } from './Utils/LanguageContext';
import '../styles/FooterContact.css';

const FooterContact = () => {
  const { languageData } = useContext(LanguageContext);

  return (
    <footer id="contact-footer">
      <hr className="separator-line" />

      <div className="contact-card">
        {/* Connect title */}
        <div className="contact-items">
          <h1 className="subtitle">{languageData.connectTitle} </h1>
        </div>

        {/* Connect description */}
        <div className="contact-items">
          <p>{languageData.connectDescription}</p>
        </div>

        {/* Contact icons */}
        <div className="contact-icons">
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

      <div className="footer-bg">
        <p> © 2024 Louise Carnevali. {languageData.rightsReserved}</p>
      </div>
    </footer>
  );
};

export default FooterContact;
