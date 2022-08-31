import React, { useState } from "react";

// Components
import MenuLinks from "./subcomponents/MenuLinks";
import MenuToggle from "./subcomponents/MenuToggle";
import NavBarContainer from "./subcomponents/NavBarContainer";

function Navbar({ props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      {/* <MenuToggle toggle={toggle} isOpen={isOpen} /> */}
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
}

export default Navbar;
