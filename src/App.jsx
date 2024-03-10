import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import FooterContact from './components/FooterContact';
import HomePage from './routes/HomePage';
import ProjectPage from './routes/ProjectPage';
import { LanguageProvider } from './components/Utils/LanguageContext';

import './App.css';

function App() {
  return (
    <LanguageProvider className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>

      <FooterContact />
    </LanguageProvider>
  );
}

export default App;
