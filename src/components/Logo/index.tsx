import { HTMLAttributes } from "react";

import { LogoIcon } from "@/components/Icons";

import * as S from "./styles";

export const Logo = () => (
  <S.LogoButton aria-label="Taking note app logo">
    <LogoIcon />
  </S.LogoButton>
);

export const MobileLogo = (props: HTMLAttributes<HTMLDivElement>) => (
  <S.MobileLogoWrapper {...props}>
    <Logo aria-label="Taking note app logo" />
  </S.MobileLogoWrapper>
);
