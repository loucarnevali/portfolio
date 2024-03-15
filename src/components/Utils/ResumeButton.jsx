import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import '../../styles/ResumeButton.css';

const ResumeButton = () => {
  //Acess language data from context
  const { languageData } = useContext(LanguageContext);

  return (
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
  );
};

export default ResumeButton;
