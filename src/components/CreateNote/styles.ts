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
  display: flex;
  flex-direction: column;
  flex: 1;

  animation: ${translateContent} 0.8s forwards
    cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const Content = styled.div`
  position: relative;

  flex: 1;

  padding: ${({ theme }) => theme.spacing[200]};

  @media (max-width: 1024px) {
    padding: ${({ theme }) => theme.spacing[200]} 0;
    margin-top: 10px;
  }
`;

export const NoteFooter = styled.footer`
  margin-top: 50px;
`;

export const TitleInput = styled.input`
  ${({ theme }) => theme.typography.presets.body1}
  background: transparent;

  color: var(--color-neutral-950);

  padding: 5px;

  outline: 2px solid transparent;
  border: none;

  min-width: 300px;

  font-size: 1rem;
  font-weight: 500;

  border-radius: 0.5rem;

  padding: 5px;

  &:focus {
    outline-color: var(--color-blue-500);
  }

  &::placeholder {
    color: var(--color-neutral-950);
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const TagsInput = styled(TitleInput)`
  font-size: 0.8rem;

  min-width: 350px;

  color: var(--color-neutral-950);

  font-weight: 500;

  &::placeholder {
    color: var(--color-neutral-400);
  }
`;

export const MetaInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  align-items: center;

  gap: 20px;

  margin-bottom: ${({ theme }) => theme.spacing[300]};
`;

export const LastEdited = styled.span`
  ${({ theme }) => theme.typography.presets.body2};
  color: var(--color-neutral-400);

  font-size: 14px;
  font-weight: 500;
`;

export const NoteContent = styled.textarea`
  ${({ theme }) => theme.typography.presets.body1};
  font-weight: bold;

  width: 100%;
  min-height: 300px;

  border: none;
  outline: 2px solid transparent;

  background: transparent;

  padding: 10px;

  resize: none;

  color: var(--color-neutral-950);
  font-weight: 500;

  &:focus {
    outline-color: var(--color-blue-500);
  }

  &::placeholder {
    font-weight: 500;
    color: var(--color-neutral-700);
  }
`;

export const MobileCardHeader = styled.div`
  display: none;

  color: var(--color-neutral-600);

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
  font-size: 14px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ActionsButton = styled.button`
  color: inherit;
`;

export const CancelText = styled.span`
  font-size: 14px;
`;

export const SaveNote = styled.span`
  font-size: 14px;

  color: var(--color-blue-500);
`;

export const SaveButton = styled.button`
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

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s;

  &:focus-visible {
    outline-color: var(--color-white);
    outline-offset: -3px;
  }

  &:hover {
    background: var(--color-blue-700);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
