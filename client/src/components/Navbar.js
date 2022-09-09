import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Navbar as Nav } from "@blueprintjs/core";

function Navbar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <Nav>
      <Nav.Group>
        <Nav.Heading>Scheduler</Nav.Heading>
        <Nav.Divider />
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
        <NavLink to="/new_appointment" activeClassName="active">
          Schedule Appointment
        </NavLink>
        <button className="navbtn" onClick={handleLogoutClick}>
          Logout
        </button>
        <Button className="bp4-minimal" icon="home" text="Home" />
        <Button className="bp4-minimal" icon="document" text="Files" />
      </Nav.Group>
    </Nav>
  );
}

export default Navbar;
