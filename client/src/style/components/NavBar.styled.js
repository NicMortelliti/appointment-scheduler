import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../GlobalStyles";

export const Nav = styled.nav`
  background-color: ${(props) => props.theme.thirty};
  font-size: 18px;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 1px rgba(0, 0, 0, 0.15);
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  height: auto;
  ${Container};
`;

export const Menu = styled.ul`
  display: flex;
`;

export const MenuItem = styled.li`
  list-style: none;
  flex: 1;
  display: flex;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.theme.ten};
  transition: all 0.5s ease;
  flex: 1;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.theme.sixty};
    transition: all 0.5s ease 0s;
    opacity: 0.5;
    color: ${(props) => props.theme.ten};
  }

  &:active {
    background-color: #e38b;
  }

  .active {
    background-color: #d00;
  }
`;

export const MenuItemBtn = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 0rem 1rem;
}
`;

export const MenuLinkBtn = styled.button`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border: none;
  background-color: blue;
`;
