import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

function ThemeProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [locale, setLocale] = useState('en');

  const changeLanguage = (lang) => {
    setLocale(lang);
  };
  const toggleTheme = () => setIsDark(!isDark);
  return (
    <ThemeContext.Provider
      value={{ isDark, toggleTheme, locale, changeLanguage, isOpen, setIsOpen }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
