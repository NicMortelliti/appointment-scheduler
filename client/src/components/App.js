import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

// Import components
import Login from "./Login";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Stack from "./Stack";

function App() {
  const [user, setUser] = useState(null);
  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} setSignUp={setSignUp} />;

  return (
    <>
      <Navbar user={user} setUser={setUser} />
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
    </>
  );
}

export default App;
