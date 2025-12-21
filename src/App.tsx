import { Fragment, useEffect } from "react";

import { GlobalStyle } from "@/styles/global";
import { MainLayout } from "@/components/Layout/MainLayout";
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
    </Fragment>
  );
};
