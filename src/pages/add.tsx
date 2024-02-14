import { ReactNode } from "react";

import { Layout } from "@/components";
import Add from "@/pageComponents/Add/Add";

function AddPage() {
  return <Add />;
}

export default AddPage;

AddPage.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};
