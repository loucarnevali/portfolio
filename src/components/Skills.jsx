import Technologies from './Technologies.jsx';
import { useContext } from 'react';
import { LanguageContext } from './Utils/LanguageContext.jsx';
import '../styles/Skills.css';

const Skills = () => {
  //Acess language data from context
  const { languageData } = useContext(LanguageContext);

  return (
    <section id="skills-section">
      <h1 className="subtitle">skills</h1>

      <Technologies />

      {/* Skills card */}
      <div className="skills-card">
        <h1>{languageData.skillsIntro} </h1>
        <p>{languageData.skillsDescription}</p>

        {/* List of soft skills */}
        <ul className="soft-skills">
          <li>{languageData.communicationTranslation}</li>
          <li>{languageData.fastPacedTranslation}</li>
          <li>{languageData.hardWorkingTranslation}</li>
          <li>{languageData.teamWorkTranslation}</li>
          <li>{languageData.creativityTranslation}</li>
          <li>{languageData.proactiveTranslation}</li>
          <li>{languageData.attentionTranslation}</li>
          <li>{languageData.cleanCodeTranslation}</li>
          <li>{languageData.responsivenessTranslation}</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
