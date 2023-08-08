import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = ({ themProps, themeValue }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button
        className="px-4 py-2 rounded-md text-4xl bg-slate-400 hover:bg-orange-300 hover:transition-opacity selection:translate-x-4 "
        onClick={toggleTheme}
      >
        {theme}
      </button>
      <button
        className="px-4 py-2 rounded-md text-4xl bg-slate-400 hover:bg-orange-300 hover:transition-opacity selection:translate-x-4 "
        onClick={themeValue(theme)}
      >
        Goto PAge: {themProps}
      </button>
    </>
  );
};

export default ThemeToggle;
