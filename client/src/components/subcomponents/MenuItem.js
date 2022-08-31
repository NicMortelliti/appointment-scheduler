import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

function MenuItem({ children, isLast, to = "/", ...rest }) {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
}

export default MenuItem;
