import { ReactNode } from "react";

import { Layout } from "@/components";
import Home from "@/pageComponents/Home";
import { greenPointColor } from "@/constants/color";

export function HomePage() {
  return <Home />;
}

export default HomePage;

HomePage.getLayout = (page: ReactNode) => {
  return (
    <Layout withBottomNavigation headerMode={"home"}>
      <meta name="theme-color" content={greenPointColor} />
      {page}
    </Layout>
  );
};
