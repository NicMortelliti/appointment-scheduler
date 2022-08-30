import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = styled(RouterNavLink)`
  padding: 14px;
  width: auto;
  font-size: 17px;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.sixty};
    opacity: 0.5;
  }
`;

export default NavLink;
