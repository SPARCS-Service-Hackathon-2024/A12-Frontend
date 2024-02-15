import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

import Header from "./Header";
import BottomNavigation from "./BottomNavigation";

export interface LayoutProps {
  children: ReactNode;
  withBottomNavigation?: boolean;
}

function Layout({
  children,
  withBottomNavigation = false,
}: LayoutProps) {
  return (
    <Box
      h={"100vh"}
      overflow={"hidden"}
      position={"relative"}
    >
      <Header />
      <Box
        marginTop={"56px"}
        h={`calc(100% - ${
          56 + (withBottomNavigation ? 60 : 0)
        }px)`}
      >
        {children}
      </Box>
      {withBottomNavigation && <BottomNavigation />}
    </Box>
  );
}

export default Layout;
