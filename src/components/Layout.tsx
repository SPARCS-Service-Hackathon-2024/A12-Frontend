import { ReactNode } from "react";
import { BottomNavigation } from ".";
import { Box } from "@chakra-ui/react";

export interface LayoutProps {
  children: ReactNode;
  withBottomNavigation?: boolean;
}

function Layout({
  children,
  withBottomNavigation = false,
}: LayoutProps) {
  return (
    <Box h={"100vh"}>
      {children}
      {withBottomNavigation && <BottomNavigation />}
    </Box>
  );
}

export default Layout;
