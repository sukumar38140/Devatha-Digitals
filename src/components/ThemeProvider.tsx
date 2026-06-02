"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "orange" | "blue" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("orange");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read persisted theme on mount
    const savedTheme = localStorage.getItem("app_theme") as Theme;
    if (savedTheme && ["orange", "blue", "dark"].includes(savedTheme)) {
      setThemeState(savedTheme);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Persist theme
    localStorage.setItem("app_theme", theme);

    // Apply theme classes to html element
    const htmlElement = document.documentElement;
    htmlElement.classList.remove("theme-orange", "theme-blue", "theme-dark", "dark");

    if (theme === "orange") {
      htmlElement.classList.add("theme-orange");
    } else if (theme === "blue") {
      htmlElement.classList.add("theme-blue");
    } else if (theme === "dark") {
      htmlElement.classList.add("theme-dark", "dark");
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
