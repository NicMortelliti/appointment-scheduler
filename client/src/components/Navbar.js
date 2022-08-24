import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Navbar({ toggler }) {
  const NavUnlisted = styled.ul`
    display: flex;

    a {
      text-decoration: none;
    }

    li {
      color: red;
      margin: 0 0.8rem;
      font-size: 1.3rem;
      position: relative;
      list-style: none;
    }

    .current {
      li {
        border-bottom: 2px solid black;
      }
    }
  `;

  return (
    <NavUnlisted className="nav">
      <NavLink to="/" activeClassName="current" exact>
        <li>Home</li>
      </NavLink>
      <NavLink to="/new_appointment" activeClassName="current">
        <li>Schedule Appointment</li>
      </NavLink>
      <li>
        <button onClick={toggler}>Switch Theme</button>
      </li>
      <li>
        <button
          className="nav"
          onClick={() => console.log("you clicked logout")}>
          Logout
        </button>
      </li>
    </NavUnlisted>
  );
}

export default Navbar;
