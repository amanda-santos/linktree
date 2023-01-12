import { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "../styles/themes/default";
import { lightTheme } from "../styles/themes/light";

type ThemeType = "light" | "dark";

export type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as ThemeContextType);

type ThemeContextProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<ThemeType>("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("@linktree:theme-state-1.0.0", newTheme);
  };

  useEffect(() => {
    const currentTheme =
      localStorage.getItem("@linktree:theme-state-1.0.0") ?? "dark";
    setTheme(currentTheme as ThemeType);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme === "light" ? lightTheme : defaultTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
