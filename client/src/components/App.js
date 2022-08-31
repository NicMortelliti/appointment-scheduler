import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

// Import components
import Login from "./Login";
import Navbar from "./Navbar";
import Signup from "./Signup";

function App() {
  const [theme, setTheme] = useState("light");
  const [signUp, setSignUp] = useState(false);
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="App">
      <Navbar toggler={themeToggler} />
      <div className="main">
        <Switch>
          <Route exact path="/">
            "home"
          </Route>
          <Route exact path="/signup">
            {signUp ? (
              <Signup setSignUp={setSignUp} />
            ) : (
              <Login setSignUp={setSignUp} />
            )}
          </Route>
          <Route exact path="/new_appointment">
            "new appointment"
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
