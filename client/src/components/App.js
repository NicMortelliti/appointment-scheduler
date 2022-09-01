import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

// Import components
import Login from "./Login";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Stack from "./Stack";

function App() {
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Stack />
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
