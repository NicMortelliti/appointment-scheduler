import React from "react";
import NavBar from "../style/components/NavBar.styled";
import NavLink from "../style/components/NavLink.styled";

function Navbar({ toggler }) {
  return (
    <NavBar>
      <NavLink to="/" activeClassName="current" exact>
        Home
      </NavLink>
      <NavLink to="/new_appointment" activeClassName="current">
        Schedule Appointment
      </NavLink>
      <NavLink to="/signup" activeClassName="current">
        Signup
      </NavLink>
      <button onClick={toggler}>Switch Theme</button>
      <NavLink to="/">Logout</NavLink>
    </NavBar>
  );
}

export default Navbar;
