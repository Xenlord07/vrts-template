import React, { useCallback, useEffect, useState } from "react";
import "./theme-switch.scss";

const STORAGE_KEY = "theme";

const getInitialTheme = (): "light" | "dark" => {
  const stored =
    typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  const attr =
    typeof document !== "undefined"
      ? document.documentElement.getAttribute("data-theme")
      : null;
  return attr === "dark" || attr === "light"
    ? (attr as "light" | "dark")
    : "light";
};

const ThemeSwitch: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);
  const isDark = theme === "dark";

  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked ? "dark" : "light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return (
    <label className="theme-switch">
      <input
        type="checkbox"
        className="visually-hidden"
        checked={isDark}
        onChange={onChange}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      />
      <span className="track" aria-hidden="true">
        <span className="thumb" />
      </span>
      <span className="label">{isDark ? "Dark" : "Light"}</span>
    </label>
  );
};

export default ThemeSwitch;
