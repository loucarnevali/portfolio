import { useContext } from 'react';
import Reveal from './Utils/Reveal';
import { LanguageContext } from './Utils/LanguageContext';
import ResumeButton from './Utils/ResumeButton';

import '../styles/Education.css';

const Education = () => {
  //Acess language data from context
  const { languageData } = useContext(LanguageContext);

  return (
    <Reveal>
      <section className="education-section">
        <h1 className="subtitle"> {languageData.educationTitle}</h1>

        <div className="education-wrapper">
          <div className="education-card">
            <p>{languageData.bacharelTI} | 2022 - 2025</p>
            <h3> {languageData.educationDescriptionTI}</h3>
            <p>Unicesumar | {languageData.educationLocalTI} </p>
          </div>

          <div className="education-card">
            <p>{languageData.bachelorNutri} | 2005 - 2010</p>
            <h3> {languageData.educationDescriptionNutri} </h3>
            <p> {languageData.educationLocalNutri}</p>
          </div>

          <div className="education-card course">
            <p>{languageData.otherCourses}</p>
            <h3>
              {languageData.reactCourse} <span> | Udemy</span>
            </h3>
            <h3>
              {languageData.supportCourse} <span> | Coursera + Google </span>
            </h3>
            <h3>
              {languageData.cs50Course} <span>| Harvard</span>
            </h3>
            <h3>
              Web Development Bootcamp <span>| Udemy</span>
            </h3>
            <h3>
              Santander Bootcamp Fullstack Development
              <span>| Digital Innovation One</span>
            </h3>
            <h3>
              JavaScript <span>| Origamid</span>
            </h3>
            <h3>
              HTML & CSS <span>| Origamid</span>
            </h3>
            <h3>
              UX Design & UI Design <span>| Origamid</span>
            </h3>
          </div>

          <div className="education-card idioms">
            <p>{languageData.idiomsTitle} </p>
            <h3>
              {languageData.portgueseIdiom}
              <span> {languageData.nativeIdiom}</span>
            </h3>
            <h3>
              {languageData.englishIdiom}
              <span> {languageData.intermediateIdiom}</span>
            </h3>
            <h3>
              {languageData.spanishIdiom}
              <span> {languageData.basicIdiom}</span>
            </h3>
            <h3>
              {languageData.frenchIdiom} <span> {languageData.basicIdiom}</span>
            </h3>
          </div>

          <div className="about-button-resume">
            <ResumeButton />
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default Education;
