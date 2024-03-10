import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { LanguageContext } from './Utils/LanguageContext';
import Slider from 'react-slick';
import ProjectCard from '../components/ProjectCard';
import projectsList from '../data-json/projects.json';
import ButtonCustomLink from './Utils/ButtonCustomLink';
import '../styles/Projects.css';

const Projects = () => {
  const { languageData } = useContext(LanguageContext);
  const [isMobile, setIsMobile] = useState(false);
  const visibleProjects = projectsList.slice(0, 4);

  // Effect to update mobile viewport state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Slider Settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="projects-section">
      <h1 className="subtitle">{languageData.projects}</h1>

      {/* Conditional rendering based on viewport */}
      {isMobile ? (
        <Slider {...sliderSettings}>
          {/* Map over visible projects to render */}
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Slider>
      ) : (
        <div className="project-wrapper">
          {/* Map over visible projects to render */}
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}

      <hr className="separator-line" />

      <ButtonCustomLink
        to="/projects"
        buttonText={languageData.seeMoreProjectsButton}
      />
    </section>
  );
};

export default Projects;
