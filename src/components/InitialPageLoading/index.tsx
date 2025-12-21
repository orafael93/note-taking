import { useState, Fragment, useEffect } from "react";

import { LogoIcon } from "@/components/Icons";

import * as S from "./styles";

export const InitialPageLoading = () => {
  const [canRemovePageLoading, setCanRemovePageLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCanRemovePageLoading(true);
    }, 1350);
  }, []);

  return (
    <Fragment>
      {canRemovePageLoading ? null : (
        <S.Wrapper>
          <S.LogoWrapper>
            <LogoIcon />
          </S.LogoWrapper>
        </S.Wrapper>
      )}
    </Fragment>
  );
};
