import React from "react";
import NavLink from "../style/components/NavLink.styled";
import styled from "styled-components";

function Navbar({ toggler }) {
  const NavUnlisted = styled.ul`
    display: flex;

    a {
      text-decoration: none;
    }

    li {
      margin: 0 0.8rem;
      font-size: 1rem;
      position: relative;
      list-style: none;
    }

    .current {
      li {
        border-bottom: 2px solid;
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
      <NavLink to="/signup" activeClassName="current">
        <li>Signup</li>
      </NavLink>
      <li>
        <button onClick={toggler}>Switch Theme</button>
      </li>
      <NavLink to="/">
        <li>Logout</li>
      </NavLink>
    </NavUnlisted>
  );
}

export default Navbar;
