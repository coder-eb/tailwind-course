import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

function DarkModeToggle() {
  
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('DARK_MODE')) || false);
  
  const setDarkMode = () => {
    const mode = isDarkMode ? false : true;
    setIsDarkMode(mode);
  }

  const handleDarkModeClass = (colorMode) => {
    if(colorMode) {
      const classList = document.body.classList
      if(!classList.contains('dark')) {
        classList.add('dark');
      }
    }
    else {
      document.body.classList.remove('dark');
    }
  }

  useEffect(() => {
    localStorage.setItem('DARK_MODE', JSON.stringify(isDarkMode));
    handleDarkModeClass(isDarkMode)
  }, [isDarkMode])

  return (
    <div
      id="dark-mode-toggle"
      className="fixed top-24 right-0 z-10 inline-block w-12 cursor-pointer rounded-l-lg bg-zinc-900 p-2 text-3xl text-zinc-200 dark:bg-zinc-200 dark:text-zinc-900"
      onClick={setDarkMode}
    >
      <FontAwesomeIcon icon={faSun} className="dark:hidden" />
      <FontAwesomeIcon icon={faMoon} className="hidden dark:inline" />
    </div>
  );
}

export default DarkModeToggle;
