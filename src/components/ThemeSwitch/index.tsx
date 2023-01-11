import { useThemeContext } from "../../hooks/useThemeContext";

import { Switch } from "./styles";

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <Switch isDarkTheme={theme === "dark"}>
      <button onClick={toggleTheme}>{""}</button>
      <span></span>
    </Switch>
  );
};
