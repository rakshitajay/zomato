import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch { return false; }
  });

  useEffect(() => {
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
    document.documentElement.style.background = dark ? "#0f172a" : "#fff";
    document.documentElement.style.color = dark ? "#e6eef8" : "#111";
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
