import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: 20px;

  border-right: 1px solid var(--color-neutral-200);

  @media (max-width: 1024px) {
    padding: 0;

    border-right: none;
  }
`;

export const SectionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  padding: 12px;
`;

export const PageTitle = styled.h1`
  font-size: var(--font-h-lg);
  line-height: 120%;
  letter-spacing: -0.5px;
  font-weight: bold;

  color: var(--color-neutral-950);
`;

export const Title = styled.h1`
  font-size: var(--font-label);

  color: var(--color-neutral-700);
  font-weight: 500;
`;

export const CreateButton = styled.button`
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
    outline-color: var(--color-neutral-100);
  }

  &:hover {
    background: var(--color-blue-500);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  font-size: var(--font-label);
  line-height: 120%;
  letter-spacing: -0.2px;
  font-weight: normal;
  width: 300px;

  padding: var(--spacing-100) var(--spacing-200);

  background: var(--color-neutral-800);
  color: var(--color-neutral-100);

  border: 1px solid var(--color-neutral-700);
  border-radius: 8px;

  &::placeholder {
    color: var(--color-neutral-500);
  }
`;

export const NotesList = styled.div`
  & > div:last-child {
    border-bottom: none;
  }
`;

export const MainContent = styled.main`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  border-left: 1px solid var(--color-neutral-200);

  @media (max-width: 1024px) {
    height: calc(100dvh - 64px);
    overflow: hidden;

    grid-column: 1 / -1;
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

  border-bottom: 1px solid var(--color-neutral-200);
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

  overflow-y: auto;

  height: 100%;

  @media (max-width: 1024px) {
    border: none;
    padding: 16px;

    grid-template-columns: 1fr;
  }
`;

export const NoArchivedNotesWrapper = styled.div`
  background: var(--color-neutral-100);
  padding: 8px;

  margin: 0 10px;

  border-radius: 8px;

  font-size: var(--font-label);
  font-weight: 500;

  color: var(--color-neutral-950);

  & p {
    display: inline;
  }
`;

export const CreateNewNoteButton = styled.button`
  text-decoration: underline;
  display: inline;

  word-break: break-all;

  color: inherit;

  &:focus-visible {
    color: var(--color-blue-500);
    outline: none;
  }
`;
