import PropTypes from 'prop-types';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-item">
        <img src={project.image} alt="" />
        <h1>{project.title}</h1>

        {/* List of Project Technologies */}
        <ul>
          {project.technologies.map((technology, index) => (
            <li key={`${project.id}-${index}`}> {technology} </li>
          ))}
        </ul>

        {/* Buttons*/}
        <div className="buttons">
          <button className="github-button">
            <img src="/img/projects-img/github.svg" alt="Github Icon" />
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </button>

          <button className="live-button">
            <img src="/img/projects-img/live.svg" alt="Live Icon" />
            <a href={project.website} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

// PropTypes Definition
ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    github: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
