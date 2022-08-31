import React from "react";
import { IconButton, MenuIcon } from "@chakra-ui/react";
import { AiOutlineClose as CloseIcon } from "react-icons/ai";

function MenuToggle({ toggle, isOpen }) {
  return <IconButton onClick={toggle} icon={<MenuIcon />} />;
}

export default MenuToggle;
