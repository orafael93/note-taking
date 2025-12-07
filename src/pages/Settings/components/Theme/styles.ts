import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 33px;

  max-width: 528px;
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

  @media (max-width: 1024px) {
    display: none;
  }
`;
