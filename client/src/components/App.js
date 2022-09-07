import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

// Import components
import Login from "./Login";
import Navbar from "./Navbar";
import NewAppointmentForm from "./NewAppointmentForm";
import Signup from "./Signup";
import Stack from "./Stack";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      {user && <Navbar user={user} setUser={setUser} />}
      <div className="main">
        <Switch>
          <Route exact path="/">
            {user ? <Stack /> : <Login onLogin={setUser} />}
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route exact path="/new_appointment">
            <NewAppointmentForm />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
