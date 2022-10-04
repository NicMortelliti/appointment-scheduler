import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Navbar as Nav } from "@blueprintjs/core";

function Navbar({ user, setUser }) {
  const theme = {
    fontSize: "18px",
    color: "#5C255C",
  };

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <Nav
      fixedToTop
      style={{
        background: "#8BCDBC",
      }}>
      <Nav.Group>
        <Nav.Heading>
          <h4
            style={{
              margin: "10px auto 0px",
              color: "#5c255c",
              fontWeight: "bold",
              fontFamily: "Poiret One",
              textAlign: "center",
            }}>
            PacNW
          </h4>
          <p
            style={{
              margin: "0px auto 8px",
              color: "#5c255c",
              fontWeight: "lighter",
              fontFamily: "Poiret One",
              fontSize: "14px",
              textAlign: "center",
            }}>
            Health
          </p>
        </Nav.Heading>
        <Nav.Divider />
        <NavLink to="/" activeClassName="active" exact>
          <Button minimal icon="home" text="Home" style={theme} />
        </NavLink>
        <NavLink to="/new_appointment" activeClassName="active">
          <Button
            minimal
            icon="calendar"
            text="New Appointment"
            style={theme}
          />
        </NavLink>
      </Nav.Group>
      <Nav.Group align="right">
        <Button
          minimal
          onClick={handleLogoutClick}
          text="Logout"
          style={theme}
        />
      </Nav.Group>
    </Nav>
  );
}

export default Navbar;
