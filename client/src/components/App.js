import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

// Import components
import Login from "./Login";
import Navbar from "./Navbar";
import NewAppointmentForm from "./NewAppointmentForm";
import Stack from "./Stack";

function App() {
  const [user, setUser] = useState(null);
  const [allAppointments, setAllAppointments] = useState([]);

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
            <Stack
              url={URL}
              allAppointments={allAppointments}
              setAllAppointments={setAllAppointments}
            />
          </Route>
          <Route exact path="/new_appointment">
            <NewAppointmentForm
              allAppointments={allAppointments}
              setAllAppointments={setAllAppointments}
            />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
