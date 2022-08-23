import React from "react";
import { NavLink } from "react-router-dom";

import { Box, Flex, Link } from "rebass";

function Navbar() {
  return (
    <Flex px={2} color="white" bg="black" alignItems="center">
      <NavLink to="/" exact>
        <Link variant="nav" m={2}>
          Home
        </Link>
      </NavLink>
      <NavLink to="/new_appointment" exact>
        <Link variant="nav" m={2}>
          Schedule Appointment
        </Link>
      </NavLink>
      <Box mx="auto" />
      {/* <Link variant="nav" href="/new_appointment" m={2}>
        Logout
      </Link> */}
    </Flex>
  );
}

export default Navbar;
