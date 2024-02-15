import { ReactNode } from "react";
import { Box, Flex } from "@chakra-ui/react";

import Header from "./Header";
import BottomNavigation from "./BottomNavigation";

export interface LayoutProps {
  children: ReactNode;
  withBottomNavigation?: boolean;
  headerMode?: "home" | "gallery";
}

function Layout({
  children,
  withBottomNavigation = false,
  headerMode,
}: LayoutProps) {
  return (
    <Flex
      h={"100vh"}
      direction={"column"}
      overflow={"hidden"}
      position={"relative"}
    >
      <Header headerMode={headerMode} />
      <Box flex={1}>{children}</Box>
      {withBottomNavigation && <BottomNavigation />}
    </Flex>
  );
}

export default Layout;
