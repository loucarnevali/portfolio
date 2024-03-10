import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Creating the language context
const LanguageContext = createContext();

// Language provider component
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');
  const [languageData, setLanguageData] = useState({});

  // Effect to fetch language data when component mounts
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchLanguageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Effect to refetch language data when language changes
  useEffect(() => {
    fetchLanguageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const fetchLanguageData = () => {
    const dataUrl = `/locales/${language}.json`;

    // Fetch request to retrieve language data
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => setLanguageData(data))
      .catch((error) => console.error('Error fetching language data:', error));
  };

  return (
    // Returning the language provider with language data and the function to set language
    <LanguageContext.Provider value={{ language, setLanguage, languageData }}>
      {children}
    </LanguageContext.Provider>
  );
};

//PropTypes Validation
LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { LanguageContext, LanguageProvider };
