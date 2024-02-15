import { ReactNode } from "react";

import { Layout } from "@/components";
import Gallery from "@/pageComponents/Gallery";

function GalleryPage() {
  return <Gallery />;
}

export default GalleryPage;

GalleryPage.getLayout = (page: ReactNode) => {
  return <Layout withBottomNavigation>{page}</Layout>;
};
