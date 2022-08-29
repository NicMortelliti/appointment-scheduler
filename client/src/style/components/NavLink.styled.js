import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = styled(RouterNavLink)`
  color: ${(props) => props.theme.thirty};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  cursor: pointer;
`;

export default NavLink;
