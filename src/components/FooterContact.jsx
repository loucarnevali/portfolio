import { useContext } from 'react';
import { LanguageContext } from './Utils/LanguageContext';
import SocialIcons from './Utils/SocialIcons';

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
          <SocialIcons />
        </div>
      </div>

      <div className="footer-bg">
        <p> © 2024 Louise Carnevali. {languageData.rightsReserved}</p>
      </div>
    </footer>
  );
};

export default FooterContact;
