import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageContext } from '../components/Utils/LanguageContext';
import projectsData from '../data-json/projects.json';
import ProjectCard from '../components/ProjectCard';
import Typed from 'typed.js';
import ButtonCustomLink from '../components/Utils/ButtonCustomLink';
import Reveal from '../components/Utils/Reveal';

import '../styles/ProjectPage.css';

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const { languageData } = useContext(LanguageContext);
  const { hash } = useLocation();

  //Effect to scroll to the element with corresponding hash
  useEffect(() => {
    if (hash) {
      const idWithoutHash = hash.replace('#', '');
      document.getElementById(idWithoutHash).scrollIntoView(true);
      // console.log(hash);
    }
  }, [hash]);

  //Effect to set projects data when component mounts
  useEffect(() => {
    setProjects(projectsData);
  }, []);

  //Effect to initialize typing animation
  useEffect(() => {
    const options = {
      strings: ['Coding', 'Innovation', 'Gastronomy', 'Traveling'],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed('.auto-type', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Reveal>
      <section className="project-page">
        <h1 className="title">{languageData.projects}</h1>

        {/* Rendering of project cards */}
        <div className="project-wrapper">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <hr className="separator-line" />

        {/* Link to go back to the home page */}
        <ButtonCustomLink to="/" buttonText={languageData.backToHomeButton} />

        {/* Animation Card */}
        <div className="extra-card">
          <div className="extra-card-item">
            <h1>
              &lt; Love <span className="auto-type"></span>
              &frasl; &gt;
            </h1>
          </div>
        </div>
      </section>
    </Reveal>
  );
};

export default ProjectPage;
