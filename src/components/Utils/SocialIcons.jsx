import '../../styles/SocialIcons.css';

const SocialIcons = () => {
  return (
    <div className="home-icons">
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
  );
};

export default SocialIcons;
