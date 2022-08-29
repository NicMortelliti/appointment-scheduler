import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = styled(RouterNavLink)`
  display: flex;

  a {
    text-decoration: none;
  }

  li {
    margin: 0 0.8rem;
    font-size: 17px;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 2px solid;
    }
  }
`;

export default NavLink;
