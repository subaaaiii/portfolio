import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Set web theme"
      className={`relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
        darkMode ? "bg-text" : "bg-text"
      }`}
    >
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${
          darkMode ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {darkMode ? (
          <MdDarkMode className="text-bg text-sm" />
        ) : (
          <MdLightMode className="text-text text-sm" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;