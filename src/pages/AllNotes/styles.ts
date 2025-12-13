import styled from "styled-components";

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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 20px;

  border-right: 1px solid ${({ theme }) => theme.colors.neutral[800]};

  @media (max-width: 1024px) {
    border-right: none;

    padding: 0;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[800]};
`;

export const TitleWrapper = styled.div`
  padding: 12px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.presets.heading1}
  color: ${({ theme }) => theme.colors.neutral[100]};
`;

export const CreateButton = styled.button`
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

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.neutral[100]};
  }

  @media (max-width: 1024px) {
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
  width: 300px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[500]};
  }
`;

export const NotesList = styled.div`
  & > div:last-child {
    border-bottom: none;
  }
`;

export const LogoWrapper = styled.div`
  display: none;

  @media (max-width: 1024px) {
    padding: 20px 30px;
    background-color: #232530;

    display: block;
  }
`;

export const MainHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 30px;

  min-height: 81px;

  border-bottom: 2px solid #525866;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const AllNotesHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[800]};
`;

export const SearchInputAndSettingsIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;

export const SettingsIconWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 290px 1fr;

  border-left: 1px solid ${({ theme }) => theme.colors.neutral[800]};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral[800]};

  overflow-y: auto;

  height: 100%;

  @media (max-width: 1024px) {
    height: calc(100dvh - 128px);
    border: none;

    grid-template-columns: 1fr;

    padding: 24px;
  }
`;

export const CreateButtonMobile = styled.button`
  background: ${({ theme }) => theme.colors.blue[500]};

  border-radius: 50%;

  border: 2px solid transparent;
  outline: none;

  position: fixed;
  right: 35px;
  bottom: 80px;

  display: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.neutral[100]};
  }

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 64px;
    height: 64px;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 48px;
    height: 48px;
  }
`;
