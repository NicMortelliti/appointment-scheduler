import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  Menu,
  MenuItem,
  MenuItemBtn,
  MenuLink,
  MenuLinkBtn,
} from "../style/components/NavBar.styled";

function Navbar({ toggler }) {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <MenuItem>
            <MenuLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              exact>
              Home
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/new_appointment" activeclassname="current">
              Schedule Appointment
            </MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "inactive")}>
              Signup
            </MenuLink>
          </MenuItem>
          <MenuItemBtn>
            <MenuLinkBtn onClick={toggler}>Switch Theme</MenuLinkBtn>
          </MenuItemBtn>
          <MenuItem>
            <MenuLink to="/" right>
              Logout
            </MenuLink>
          </MenuItem>
        </NavbarContainer>
      </Nav>
    </div>
  );
}

export default Navbar;
