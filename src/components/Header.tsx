import { Box, Flex, FlexProps } from "@chakra-ui/react";

export interface HeaderProps {
  bg?: FlexProps["bg"];
}

function Header({ bg }: HeaderProps) {
  return (
    <Flex
      h={"56px"}
      justify={"space-between"}
      align={"center"}
      bg={bg}
      position="absolute"
      top="0"
      left="0"
      right="0"
    ></Flex>
  );
}

export default Header;
