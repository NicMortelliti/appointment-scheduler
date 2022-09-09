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
    <Nav fixedToTop>
      <Nav.Group>
        <Nav.Heading>PacNW Health</Nav.Heading>
        <Nav.Divider />
        <NavLink to="/" activeClassName="active" exact>
          <Button className="bp4-minimal" icon="home" text="Home" />
        </NavLink>
        <NavLink to="/new_appointment" activeClassName="active">
          <Button
            className="bp4-minimal"
            icon="calendar"
            text="New Appointment"
          />
        </NavLink>
      </Nav.Group>
      <Nav.Group className="bp4-align-right">
        <Button
          className="bp4-minimal"
          onClick={handleLogoutClick}
          text="Logout"
        />
      </Nav.Group>
    </Nav>
  );
}

export default Navbar;
