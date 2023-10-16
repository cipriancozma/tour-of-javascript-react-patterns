export const ThemeContext = React.createContext(null);

export function useThemeContext() {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, setTheme };
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
