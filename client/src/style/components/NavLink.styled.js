import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = styled(RouterNavLink)`
  float: left;
  display: block;
  text-align: center;
  padding: 14px 16px;
  font-size: 17px;
  text-decoration: none;

  &:hover {
    background-color: ${(props) => props.theme.sixty};
    opacity: 0.5;
  }
`;

export default NavLink;
