import React, { useEffect, useState } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

// Import components
import Login from "./Login";
import Navbar from "./Navbar";
import SharedForm from "../shared/SharedForm";
import Stack from "./Stack";
import ManageDoctors from "./ManageDoctors";

function App() {
  const [user, setUser] = useState(null);
  const [allAppointments, setAllAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

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
            <NavLink to="/add_doc" activeClassName="active" exact>
              <button style={{ background: "none", border: "none" }}></button>
            </NavLink>
            <Stack
              allAppointments={allAppointments}
              setAllAppointments={setAllAppointments}
              selectedAppointment={selectedAppointment}
              setSelectedAppointment={setSelectedAppointment}
              user={user}
            />
          </Route>
          <Route exact path="/new_appointment">
            <SharedForm
              allAppointments={allAppointments}
              setAppointments={setAllAppointments}
            />
          </Route>
          <Route exact path="/edit_appointment">
            <SharedForm
              allAppointments={allAppointments}
              selectedAppointment={selectedAppointment}
              setAppointments={setAllAppointments}
            />
          </Route>
          <Route exact path="/add_doc">
            <ManageDoctors />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
