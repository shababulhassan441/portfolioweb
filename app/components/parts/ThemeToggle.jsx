"use client";
import { useEffect, useState } from "react";
import { GrSun } from "react-icons/gr";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      typeof window !== "undefined" &&
      localStorage.getItem("dark-mode") === "true"
    );
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("dark-mode", "true");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("dark-mode", "false");
    }
  }, [isDarkMode]);

  return <GrSun onClick={() => setIsDarkMode((prev) => !prev)} size={20} />;
};

export default ThemeToggle;
