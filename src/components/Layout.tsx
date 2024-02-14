import { ReactNode } from "react";
import { BottomNavigation } from ".";
import { Box } from "@chakra-ui/react";

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <Box h={"100vh"}>
      {children}
      <BottomNavigation />
    </Box>
  );
}

export default Layout;
