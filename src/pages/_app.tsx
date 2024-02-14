import { NextPage } from "next";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component: Page,
  pageProps,
}: AppPropsWithLayout) {
  const getLayout = Page.getLayout ?? ((page) => page);

  return (
    <ChakraProvider>
      {getLayout(<Page {...pageProps} />)}
    </ChakraProvider>
  );
}
