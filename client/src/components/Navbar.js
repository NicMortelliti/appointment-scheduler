import React from "react";
import NavBar from "../style/components/NavBar.styled";
import NavLink from "../style/components/NavLink.styled";

function Navbar({ toggler }) {
  return (
    <NavBar>
      <NavLink to="/" activeClassName="current" exact>
        <li>Home</li>
      </NavLink>
      <NavLink to="/new_appointment" activeClassName="current">
        <li>Schedule Appointment</li>
      </NavLink>
      <NavLink to="/signup" activeClassName="current">
        <li>Signup</li>
      </NavLink>
      <li>
        <button onClick={toggler}>Switch Theme</button>
      </li>
      <NavLink to="/">
        <li>Logout</li>
      </NavLink>
    </NavBar>
  );
}

export default Navbar;
