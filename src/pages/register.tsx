import { ReactNode } from "react";

import { Layout } from "@/components";
import Register from "@/pageComponents/Register";

function RegisterPage() {
  return <Register />;
}

export default RegisterPage;

RegisterPage.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};
