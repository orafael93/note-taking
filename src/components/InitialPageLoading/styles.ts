import styled, { keyframes } from "styled-components";

const animateLogo = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.035);
  }

  100% {
    transform: scale(1);
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  overflow: hidden;

  width: 100vw;
  height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-neutral-100);

  z-index: 999;

  & .logo-name {
    fill: var(--color-base);
  }
`;

export const LogoWrapper = styled.div`
  min-width: 250px;
  min-height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;

  & :first-child {
    overflow: visible;

    animation: ${animateLogo} 0.8s infinite;
  }
`;
