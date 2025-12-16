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
  height: 100%;

  border-right: 1px solid var(--color-neutral-200);

  padding: 20px;

  & ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  & button {
    background: transparent;

    color: var(--color-neutral-100);
    font-size: 14px;
  }

  @media (max-width: 1024px) {
    padding: 0;

    border-right: 1px solid transparent;
  }
`;

type SettingItemType = {
  active: boolean;
};

export const SettingItem = styled.li<SettingItemType>`
  display: flex;
  align-items: center;
  gap: 8px;

  border-radius: 8px;

  cursor: pointer;

  padding: 10px;

  background-color: ${({ active }) =>
    active ? "var(--color-neutral-100)" : "transparent"};

  & button {
    color: var(--color-base);
  }

  & svg:last-child {
    margin-left: auto;
  }
`;

export const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    padding: 12px;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.presets.heading1}
  color: var(--color-neutral-950);
`;

export const CreateButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: ${({ theme }) => `${theme.spacing[150]} ${theme.spacing[200]}`};
  background: var(--color-blue-500);
  border: none;

  border-radius: 8px;

  color: var(--color-neutral-0);

  font-weight: bold;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: var(--color-blue-500);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  ${({ theme }) => theme.typography.presets.body1}
  background: var(--color-neutral-800);
  color: var(--color-neutral-100);
  border: 1px solid var(--color-neutral-700);
  border-radius: 8px;
  padding: ${({ theme }) => `${theme.spacing[100]} ${theme.spacing[200]}`};
  width: 300px;

  &::placeholder {
    color: var(--color-neutral-500);
  }
`;

export const NotesList = styled.div`
  overflow-y: auto;

  & > div:last-child {
    border-bottom: none;
  }
`;

export const LogoWrapper = styled.div`
  display: none;

  @media (max-width: 1024px) {
    background-color: var(--color-neutral-100);
    display: block;
    padding: 20px 30px;
  }
`;

export const MainHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 30px;

  min-height: 81px;

  border-bottom: 2px solid var(--color-neutral-200);

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const AllNotesHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid var(--color-neutral-800);
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

  border-left: 1px solid var(--color-neutral-200);
  border-right: 1px solid var(--color-neutral-200);

  overflow-y: auto;

  height: 100%;

  @media (max-width: 1024px) {
    height: calc(100dvh - 128px);
    border: none;

    grid-template-columns: 1fr;

    padding: 24px;
  }
`;
