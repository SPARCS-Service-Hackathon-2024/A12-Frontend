import { greenPointColor } from "@/constants/color";
import {
  LogoGreenIcon,
  LogoIcon,
  SearchFakeIcon,
  SideMenuIcon,
} from "@/svg";
import { Box, Flex, FlexProps } from "@chakra-ui/react";

export interface HeaderProps {
  headerMode?: "home" | "gallery";
}

function Header({ headerMode }: HeaderProps) {
  return headerMode === "home" ? (
    <Flex
      px={"20px"}
      h={"93px"}
      pb={"22px"}
      justify={"space-between"}
      align={"flex-end"}
      direction={"row"}
      bg={greenPointColor}
    >
      <LogoIcon />
      <SideMenuIcon />
    </Flex>
  ) : (
    <Flex
      px={"20px"}
      h={"93px"}
      pb={"22px"}
      justify={"space-between"}
      align={"flex-end"}
      direction={"row"}
      bg={"white"}
    >
      <LogoGreenIcon />
      <SearchFakeIcon />
    </Flex>
  );
}

export default Header;
