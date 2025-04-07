import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCartArrowDown, FaSun, FaMoon } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

import { Link, Links } from "react-router-dom";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      align="center"
      justifyContent="space-between"
      marginTop="5px"
      marginInline="5px"
      flexDir={{
        base: "column",
        sm: "row",
      }}
      bg={useColorModeValue("gray.200", "gray.900")}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="1px solid "
        borderRadius="md"
        padding="10px"
      >
        <span>Product</span>
        <Link to="/">
          <FaCartArrowDown size={30} />
        </Link>
      </Box>
      <Box>
        <Link to="create">
          <Button marginInline="10px" backgroundColor="gray.400">
            <IoIosAddCircleOutline />
          </Button>
        </Link>
        <Button backgroundColor="gray.400" onClick={toggleColorMode}>
          {colorMode === "light" ? <FaSun /> : <FaMoon />}
        </Button>
      </Box>
    </Flex>
  );
}

export default Navbar;
