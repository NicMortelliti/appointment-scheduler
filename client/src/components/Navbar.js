import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
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
        <button className="navbtn" onClick={() => console.log("Logging Out")}>
          Logout
        </button>
      </li>
    </ul>
  );
}

export default Navbar;
