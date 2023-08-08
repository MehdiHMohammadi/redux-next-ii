import { useState, useContext } from "react";

import ThemeContext from "./theme-context";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  //   const [themeState, setThemeState] = useState(valueContext);

  const [themeState, setThemeState] = useState(theme);
  const handlerSetThemeState = () => {
    theme === "Light" ? setThemeState("Dark") : setThemeState("Light");
    setTheme(themeState);
  };
  return (
    <>
      <h1>{theme}</h1>
      <button onClick={handlerSetThemeState}>
        Switch Theme (Current: {theme})
      </button>
    </>
  );
};

export default ThemeSwitcher;
