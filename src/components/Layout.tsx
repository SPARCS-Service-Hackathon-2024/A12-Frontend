import { ReactNode } from "react";
import { BottomNavigation } from ".";

export interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      {children}
      <BottomNavigation />
    </div>
  );
}

export default Layout;
