import { useState } from 'react';
import { themeContext } from '../../contexts/theme';
import darkMode from '../../darkMode';
import './style.css';
import Container from '../Container';
import Button from '../Button';

// export const darkMode = (className, theme) => {
//   return [className, `${className}--${theme}`].join(' ')
// }

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  return (
    <div className={darkMode('App', theme)}>
      <Button btnType="change-theme" onClick={toggleTheme}>
        CT
      </Button>
      <themeContext.Provider value={theme}>
        <Container />
      </themeContext.Provider>
    </div>
  );
}

export default App;
