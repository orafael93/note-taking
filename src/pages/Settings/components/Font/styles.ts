import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-bottom: 64px;
  }
`;

const translateContent = keyframes`
  from {
    transform: translateX(-20px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const MainContent = styled.div`
  flex: 1;

  animation: ${translateContent} 0.8s forwards
    cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const Content = styled.div`
  position: relative;

  padding: ${({ theme }) => theme.spacing[200]};

  max-width: 600px;

  @media (max-width: 1024px) {
    max-width: 100%;

    padding: ${({ theme }) => theme.spacing[200]} 0;

    margin-top: 10px;
  }
`;

export const FontText = styled.h1`
  font-size: 16px;

  color: var(--color-neutral-950);
`;

export const FontName = styled.p`
  color: var(--color-neutral-950);

  font-size: 14px;
`;

export const FontDescription = styled.p`
  color: var(--color-neutral-700);

  font-size: 12px;
`;

export const ChooseFontText = styled.h2`
  font-size: 14px;

  margin-top: 4px;

  color: var(--color-neutral-700);

  font-weight: 500;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 24px;
`;

export const ApplyChangesButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: ${({ theme }) => `${theme.spacing[150]} ${theme.spacing[200]}`};
  background: var(--color-blue-500);
  border: none;

  border-radius: 8px;

  color: var(--color-white);

  font-weight: bold;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: var(--color-blue-500);
  }

  margin-left: auto;
`;

export const MobileCardHeader = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const GoBackWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  background: transparent;
  border: none;

  color: var(--color-neutral-600);
  cursor: pointer;
`;

export const GoBackText = styled.span`
  font-size: 14px;
`;
