import React from "react";
import { Link } from "react-router-dom";

function Navbar({ toggler }) {
  return (
    <div>
      <li>
        <Link
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          exact>
          Home
        </Link>
      </li>
      <li>
        <Link to="/new_appointment" activeclassname="current">
          Schedule Appointment
        </Link>
      </li>
      <li>
        <Link
          to="/signup"
          className={({ isActive }) => (isActive ? "active" : "inactive")}>
          Signup
        </Link>
      </li>
      <li>
        <button onClick={toggler}>Switch Theme</button>
      </li>
      <li>
        <Link to="/" right>
          Logout
        </Link>
      </li>
    </div>
  );
}

export default Navbar;
