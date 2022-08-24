import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../style/GlobalStyles";
import { lightTheme, darkTheme } from "../style/Themes";
import { Route, Switch } from "react-router-dom";

// Import components
import Navbar from "./Navbar";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Navbar />
          <button onClick={themeToggler}>Switch Theme</button>
          <Switch>
            <Route exact path="/">
              "home"
            </Route>
            <Route exact path="/signup">
              "signup"
            </Route>
            <Route exact path="/new_appointment">
              "new appointment"
            </Route>
          </Switch>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
