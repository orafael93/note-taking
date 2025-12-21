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

  padding: var(--spacing-200);

  max-width: 600px;

  @media (max-width: 1024px) {
    max-width: 100%;

    padding: var(--spacing-200) 0;

    margin-top: 10px;
  }
`;

export const ColorThemeText = styled.h1`
  font-size: var(--font-body);
  color: var(--color-neutral-950);
`;

export const ThemeColor = styled.p`
  color: var(--color-neutral-950);
  font-size: var(--font-label);
`;

export const ThemeDescription = styled.p`
  color: var(--color-neutral-700);
  font-size: var(--font-caption);
`;

export const ChooseThemeText = styled.h2`
  font-size: var(--font-label);

  margin-top: 4px;

  font-weight: 500;

  color: var(--color-neutral-700);
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 24px;

  & label {
    border: 1px solid var(--color-neutral-200);
    border-radius: 8px;
  }
`;

type OptionType = {
  active: boolean;
};

export const Option = styled.div<OptionType>`
  padding: 16px;

  display: flex;
  align-items: center;
  gap: 16px;

  background: ${({ active }) =>
    active ? "var(--colors-neutral-800)" : "transparent"};

  border-radius: 8px;

  cursor: pointer;

  & input:last-child {
    margin-left: auto;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  background: var(--color-neutral-950);

  padding: 10px;
`;

export const ApplyChangesButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: var(--spacing-150) var(--spacing-200);
  background: var(--color-blue-500);
  border: none;

  border-radius: 8px;

  color: var(--color-white);

  font-weight: bold;

  cursor: pointer;
  transition: background-color 0.2s;

  &:focus-visible {
    outline-color: var(--color-white);
    outline-offset: -3px;
  }

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
  font-size: var(--font-label);
`;
