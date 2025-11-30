import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.neutral[900]};
  color: ${({ theme }) => theme.colors.neutral[100]};

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  position: relative;

  @media (max-width: 1024px) {
    height: calc(100vh - 64px);
    overflow: hidden;
  }
`;

export const SearchContainer = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing[200]};
  right: ${({ theme }) => theme.spacing[200]};
  display: flex;
  align-items: center;
  z-index: 10;

  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: ${({ theme }) => theme.spacing[200]};
    background: ${({ theme }) => theme.colors.neutral[900]};
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[800]};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  ${({ theme }) => theme.typography.presets.body1}
  background: ${({ theme }) => theme.colors.neutral[800]};
  color: ${({ theme }) => theme.colors.neutral[100]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[700]};
  border-radius: 8px;
  padding: ${({ theme }) => `${theme.spacing[100]} ${theme.spacing[200]}`};
  padding-right: ${({ theme }) => theme.spacing[400]};
  width: 300px;

  @media (max-width: 1024px) {
    width: 100%;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[500]};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.blue[500]};
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.spacing[150]};
  color: ${({ theme }) => theme.colors.neutral[400]};
  pointer-events: none;

  @media (max-width: 1024px) {
    right: ${({ theme }) => theme.spacing[300]};
  }
`;

type LeftSectionType = {
  hasRightContent: boolean;
};

export const LeftSection = styled.div<LeftSectionType>`
  width: 400px;
  min-width: 400px;
  border-left: 1px solid ${({ theme }) => theme.colors.neutral[800]};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral[800]};
  overflow-y: auto;
  height: 100vh;

  @media (max-width: 1024px) {
    width: 100%;
    min-width: 100%;
    height: calc(100vh - 128px);
    border: none;
    display: ${({ hasRightContent }) => (hasRightContent ? "none" : "block")};
    margin-top: 64px;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  overflow-y: auto;
  height: 100vh;

  @media (max-width: 1024px) {
    width: 100%;
    height: calc(100vh - 128px);
    margin-top: 64px;
  }
`;
