import { ReactNode } from "react";

import { Layout } from "@/components";
import Login from "@/pageComponents/Login";

function LoginPage() {
  return <Login />;
}

export default LoginPage;

LoginPage.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};
