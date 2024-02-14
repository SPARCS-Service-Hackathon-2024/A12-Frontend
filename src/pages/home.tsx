import { ReactNode } from "react";

import { Layout } from "@/components";
import Home from "@/pageComponents/Home";

export function HomePage() {
  return <Home />;
}

export default HomePage;

HomePage.getLayout = (page: ReactNode) => {
  return <Layout withBottomNavigation>{page}</Layout>;
};
