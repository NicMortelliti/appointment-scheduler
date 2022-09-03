import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
  return (
    <ul className="topnav">
      <li>
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/new_appointment" activeClassName="active">
          Schedule Appointment
        </NavLink>
      </li>
      <li>
        <NavLink to="/signup" activeClassName="active">
          Signup
        </NavLink>
      </li>
      <li style={{ float: "right" }}>
        <button className="navbtn" onClick={handleLogoutClick}>
          Logout
        </button>
      </li>
    </ul>
  );
}

export default Navbar;
