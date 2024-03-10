import Welcome from '../components/Welcome';
import Skills from '../components/Skills';
import About from '../components/About';
import Projects from '../components/Projects';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Reveal from '../components/Utils/Reveal';

const HomePage = () => {
  const { hash } = useLocation();

  // Effect to scroll to the element with corresponding hash
  useEffect(() => {
    if (hash) {
      const idWithoutHash = hash.replace('#', '');
      document.getElementById(idWithoutHash).scrollIntoView(true);
    }
  }, [hash]);

  return (
    <>
      <Reveal>
        <Welcome />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>
    </>
  );
};
export default HomePage;
