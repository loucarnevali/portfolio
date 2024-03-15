import { useContext } from 'react';
import Reveal from '../components/Utils/Reveal';
import { LanguageContext } from '../components/Utils/LanguageContext';
import AboutCard from '../components/AboutCard';
import Education from '../components/Education';
import '../styles/AboutPage.css';

const AboutPage = () => {
  const { languageData } = useContext(LanguageContext);

  return (
    <Reveal>
      <section id="about-page">
        <h1 className="title"> {languageData.about}</h1>

        <AboutCard />
        <Education />
      </section>
    </Reveal>
  );
};

export default AboutPage;
