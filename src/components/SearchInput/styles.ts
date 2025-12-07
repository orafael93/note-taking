import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 1024px) {
    padding: 0 12px;
  }
`;

export const SearchText = styled.p`
  display: none;

  @media (max-width: 1024px) {
    display: block;

    margin-bottom: 16px;
    padding: 0 12px;

    font-size: 20px;
    font-weight: bold;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  border: 1px solid ${({ theme }) => theme.colors.neutral[400]};

  border-radius: 0.5rem;

  z-index: 10;

  &:focus-within {
    border-color: transparent;
    outline: 2px solid ${({ theme }) => theme.colors.blue[500]};
  }

  @media (max-width: 1024px) {
    width: 100%;

    margin-bottom: 50px;
  }
`;

export const SearchInput = styled.input`
  ${({ theme }) => theme.typography.presets.body1}
  background: transparent;

  color: ${({ theme }) => theme.colors.neutral[100]};
  padding: ${({ theme }) => `${theme.spacing[100]} ${theme.spacing[200]}`};
  padding-left: 0;

  min-width: 250px;

  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[500]};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;

  padding: 5px;

  color: ${({ theme }) => theme.colors.neutral[400]};
  pointer-events: none;

  @media (max-width: 1024px) {
    right: ${({ theme }) => theme.spacing[300]};
  }
`;

export const SettingsIconWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;
