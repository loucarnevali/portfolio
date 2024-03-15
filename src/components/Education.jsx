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
            <p>{languageData.bacharelTI} / 2022 - 2025</p>
            <h3> {languageData.educationDescriptionTI}</h3>
            <p>Unicesumar | {languageData.educationLocal} </p>
          </div>

          <div className="education-card">
            <p>{languageData.bachelorNutri} / 2005 - 2010</p>
            <h3> {languageData.educationDescriptionNutri} </h3>
            <p> {languageData.educationLocalNutri}</p>
          </div>

          <div className="education-card course">
            <p>{languageData.otherCourses}</p>
            <h3> {languageData.reactCourse} | Udemy</h3>
            <h3> {languageData.supportCourse} | Coursera + Google </h3>
            <h3> {languageData.cs50Course} | Harvard </h3>
            <h3> Web Development Bootcamp | Udemy</h3>
            <h3>
              Santander Bootcamp Fullstack Development | Digital Innovation One
            </h3>
            <h3>JavaScript | Origamid </h3>
            <h3>HTML & CSS | Origamid </h3>
            <h3>UX Design & UI Design | Origamid </h3>
          </div>

          <div className="education-card idioms">
            <p>{languageData.idiomsTitle}</p>
            <h3> {languageData.portgueseIdiom}</h3>
            <h3> {languageData.englishIdiom}</h3>
            <h3> {languageData.spanishIdiom}</h3>
            <h3> {languageData.frenchIdiom}</h3>
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
