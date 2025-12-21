import { Fragment, useEffect } from "react";

import { MainLayout } from "@/components/Layout/MainLayout";
import { GlobalStyle } from "@/styles/global";
import { InitialPageLoading } from "@/components/InitialPageLoading";
import { initProjectFont, initProjectTheme } from "@/utils";

export const App = () => {
  useEffect(() => {
    initProjectFont();
    initProjectTheme();
  }, []);

  return (
    <Fragment>
      <GlobalStyle />

      <MainLayout />

      <InitialPageLoading />
    </Fragment>
  );
};
