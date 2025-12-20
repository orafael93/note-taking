import styled from "styled-components";

export const LogoButton = styled.button`
  background: transparent;

  padding: 5px;

  & .logo-name {
    fill: var(--color-base);
  }
`;

export const MobileLogoWrapper = styled.div`
  display: none;
  background-color: var(--color-neutral-100);

  @media (max-width: 1024px) {
    padding: 13px 16px;

    display: block;
  }
`;
