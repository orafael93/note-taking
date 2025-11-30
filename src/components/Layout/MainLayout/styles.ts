import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;

  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.neutral[900]};
  color: ${({ theme }) => theme.colors.neutral[100]};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const LogoWrapper = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MainContent = styled.main`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  @media (max-width: 1024px) {
    height: calc(100dvh - 64px);
    overflow: hidden;

    grid-column: 1 / -1;
  }
`;

export const MainHeaderWrapper = styled.div`
  display: flex;

  justify-content: space-between;

  padding: 30px;

  border-bottom: 2px solid #525866;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 1024px) {
    display: none;
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
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.blue[500]};
  }

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
  background: transparent;

  color: ${({ theme }) => theme.colors.neutral[100]};
  padding: ${({ theme }) => `${theme.spacing[100]} ${theme.spacing[200]}`};
  padding-left: 0;

  field-sizing: content;

  border: none;

  @media (max-width: 1024px) {
    width: 100%;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[500]};
  }

  &:focus {
    outline: none;
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

export const LeftSection = styled.div`
  display: grid;
  grid-template-columns: 290px 1fr;

  border-left: 1px solid ${({ theme }) => theme.colors.neutral[800]};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral[800]};
  overflow-y: auto;
  height: 100vh;

  @media (max-width: 1024px) {
    width: 100%;
    min-width: 100%;
    height: calc(100vh - 128px);
    border: none;

    grid-template-columns: 1fr;
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

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[800]};
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.presets.heading1}
  color: ${({ theme }) => theme.colors.neutral[100]};
`;
