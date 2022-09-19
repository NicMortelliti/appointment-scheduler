import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

// Import components
import Login from "./Login";
import Navbar from "./Navbar";
import NewAppointmentForm from "./NewAppointmentForm";
import Stack from "./Stack";

// Set server URL variable
const URL = `${process.env.REACT_APP_API_URL}`;

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

  // If user is null, display the login screen
  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Stack url={URL} />
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
