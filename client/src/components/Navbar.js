import React from "react";
import { NavLink } from "react-router-dom";
import StyledNavLink from "../style/components/StyledNavLink";
import styled from "styled-components";

function Navbar({ toggler }) {
  const NavUnlisted = styled.ul`
    display: flex;

    a {
      text-decoration: none;
    }

    li {
      // color: red;
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
      <StyledNavLink to="/" activeClassName="current" exact>
        <li>Home</li>
      </StyledNavLink>
      <StyledNavLink to="/new_appointment" activeClassName="current">
        <li>Schedule Appointment</li>
      </StyledNavLink>
      <StyledNavLink to="/signup" activeClassName="current">
        <li>Signup</li>
      </StyledNavLink>
      <li>
        <button onClick={toggler}>Switch Theme</button>
      </li>
      <StyledNavLink to="/">
        <li>Logout</li>
      </StyledNavLink>
    </NavUnlisted>
  );
}

export default Navbar;
