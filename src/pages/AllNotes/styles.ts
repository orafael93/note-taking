import styled from "styled-components";

export const MainContent = styled.main`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  background-color: var(--color-neutral-0);

  max-height: calc(100dvh - 81px);

  border-left: 1px solid var(--color-neutral-200);

  @media (max-width: 1024px) {
    overflow: hidden;
    height: calc(100dvh - 64px);

    grid-column: 1 / -1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 20px;

  scrollbar-color: var(--color-neutral-200) transparent;
  scrollbar-width: thin;

  overflow-y: hidden;

  &:hover {
    overflow-y: auto;
  }

  @media (max-width: 1024px) {
    overflow-y: auto;

    border-right: none;

    padding: 0;
    padding-bottom: 30px;
  }
`;

export const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  padding: 12px;

  @media (max-width: 1024px) {
    padding: 12px 0;
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

  color: var(--color-white);

  font-weight: bold;

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: var(--color-blue-500);
  }

  &:focus-visible {
    outline-color: var(--color-white);
    outline-offset: -3px;
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
  & > div:last-child {
    border-bottom: none;
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

export const SettingsIconWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 290px 1fr;

  border-right: 1px solid var(--color-neutral-200);

  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  height: 100%;

  @media (max-width: 1024px) {
    height: calc(100dvh - 128px);
    border: none;

    grid-template-columns: 1fr;

    padding: 16px;
  }
`;

export const CreateButtonMobile = styled.button`
  position: fixed;
  right: 35px;
  bottom: 90px;

  background: var(--color-blue-500);

  border-radius: 50%;

  border: 2px solid transparent;

  display: none;

  &:focus-visible {
    outline-color: var(--color-white);
    outline-offset: -3px;
  }

  &:focus {
    border: 2px solid var(--color-neutral-100);
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

export const NoNotesToShowWrapper = styled.div`
  background: var(--color-neutral-100);
  padding: 8px;

  border-radius: 8px;

  font-size: var(--font-label);
  font-weight: 500;

  color: var(--color-neutral-950);

  & p {
    display: inline;
  }
`;
