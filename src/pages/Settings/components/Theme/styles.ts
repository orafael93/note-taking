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

export const ColorThemeText = styled.h1`
  font-size: 16px;
`;

export const ChooseThemeText = styled.h2`
  font-size: 14px;

  margin-top: 4px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  margin-top: 24px;
`;

type OptionType = {
  active: boolean;
};

export const Option = styled.div<OptionType>`
  padding: 16px;

  display: flex;
  align-items: center;
  gap: 16px;

  background: ${({ theme, active }) =>
    active ? theme.colors.neutral[800] : "transparent"};

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

  background: ${({ theme }) => theme.colors.neutral[950]};

  padding: 10px;
`;

export const ApplyChangesButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: ${({ theme }) => `${theme.spacing[150]} ${theme.spacing[200]}`};
  background: ${({ theme }) => theme.colors.blue[500]};
  border: none;

  border-radius: 8px;

  color: ${({ theme }) => theme.colors.neutral[0]};

  font-weight: bold;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.blue[700]};
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

  color: ${({ theme }) => theme.colors.neutral[100]};
  cursor: pointer;
`;

export const GoBackText = styled.span`
  font-size: 14px;
`;
