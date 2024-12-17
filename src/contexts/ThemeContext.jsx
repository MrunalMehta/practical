/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

function ThemeProvider({children}) {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark(!isDark);
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
    {children}
  </ThemeContext.Provider>
  )
}

export default ThemeProvider 
