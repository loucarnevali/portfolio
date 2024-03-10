import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import '../../styles/LanguageSwitch.css';

const LanguageSwitch = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  //To handle language toggle
  const handleToggleLanguage = () => {
    const newLanguage = language === 'EN' ? 'PT' : 'EN';
    setLanguage(newLanguage);
  };

  return (
    <label className="language-switch">
      {/* Checkbox input */}
      <input
        type="checkbox"
        checked={language === 'PT'}
        onChange={handleToggleLanguage}
      />
      <span className="slider round"></span>
      {/* Language text */}
      <span className="language-text">{language === 'EN' ? 'EN' : 'PT'}</span>
    </label>
  );
};

export default LanguageSwitch;
