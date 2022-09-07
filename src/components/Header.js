import React from "react";
import { Flex, Heading, Text } from "rebass";

const Header = () => (
  <Flex
    px={[3, 5]}
    py={[3, 0]}
    alignItems="center"
    justifyContent="center"
    style={{
      borderBottom: "2px solid rgba(46, 139, 87, 0.2)",
    }}
  >
    <Heading fontSize={[5, 6]} style={{ borderLeft: "2px solid gold" }}>
      AdjacenT
    </Heading>
    <Text fontSize={[1, 3]} textAlign="right">
      Track and analyze your potential target companies.
    </Text>
  </Flex>
);

export default Header;
