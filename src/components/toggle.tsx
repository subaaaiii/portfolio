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
      className={`relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
        darkMode ? "bg-secondary" : "bg-gray-300"
      }`}
    >
      <div
        className={`absolute w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300 ${
          darkMode ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {darkMode ? (
          <MdDarkMode className="text-black text-sm" />
        ) : (
          <MdLightMode className="text-yellow-500 text-sm" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;