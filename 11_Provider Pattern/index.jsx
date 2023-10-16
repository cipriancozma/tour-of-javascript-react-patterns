import { ThemeProvider, ThemeContext } from "./ThemeContext";

const LandingPage = () => {
  <ThemeProvider>
    <TopNav />
    <Main />
  </ThemeProvider>;
};

const TopNav = () => {
  return (
    <ThemeContext.Consumer>
      {{ theme }} ={">"}{" "}
      <div style={{ backgroundColor: theme === "light" ? "#fff" : "#000 " }}>
        ...
      </div>{" "}
      {"}"}
    </ThemeContext.Consumer>
  );
};

const Toggle = () => {
  return (
    <ThemeContext.Consumer>
      {{ theme, setTheme }} ={">"} (
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#000",
          color: theme === "light" ? "#000" : "#fff",
        }}
      >
        Use {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      ){"}"}
    </ThemeContext.Consumer>
  );
};
