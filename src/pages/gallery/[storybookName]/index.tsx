import { ReactNode } from "react";

import { Layout } from "@/components";
import StorybookInfo from "@/pageComponents/StorybookInfo";

export interface StorybookPageProps {}

function StorybookPage({}: StorybookPageProps) {
  return <StorybookInfo />;
}

export default StorybookPage;
