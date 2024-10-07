// Theme toggle.

// Hook.
import { useState, useEffect } from "react";

// Icons.
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function ThemeToggle() {
  const [darkMode, setDarkmode] = useState<boolean>(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "darkMode") setDarkmode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-8 flex items-center bg-gray-700 dark:bg-white cursor-pointer rounded-full p-1"
      onClick={() => setDarkmode(!darkMode)}
    >
      <DarkModeOutlinedIcon className="text-yellow-400" />
      <div
        className="absolute bg-white dark:bg-medium w-6 h-6 rounded-full shadow-md transform transition-transform duration-700"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
      <LightModeOutlinedIcon className="ml-auto text-red-600" />
    </div>
  );
}

export default ThemeToggle;

