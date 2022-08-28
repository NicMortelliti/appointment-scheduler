import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
  background: ${(props) => (props.primary ? "palevioletred" : "none")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: ${(props) => (props.primary ? "2px solid palevioletred" : "none")};
  border-radius: 3px;
  cursor: pointer;
`;

export default StyledNavLink;
