import React from "react";
import MenuItem from "./MenuItem";
import { Box, Stack } from "@chakra-ui/react";

function MenuLinks({ isOpen }) {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}>
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/new_appointment">Schedule Appointment</MenuItem>
        <MenuItem to="/signup">Signup</MenuItem>
      </Stack>
    </Box>
  );
}

export default MenuLinks;
