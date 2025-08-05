import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'dark';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeProvider, ThemeContext };
// Usage in components:
// import { useTheme } from '../context/ThemeContext';
// const { dark, toggleTheme } = useTheme();
// <button onClick={toggleTheme}>
//   {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}    
// </button>
// This will toggle the theme and update the local storage accordingly.
// The body element will have a data-theme attribute that can be used in CSS for styling.
