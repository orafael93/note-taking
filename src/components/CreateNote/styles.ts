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

  padding: var(--spacing-200);

  @media (max-width: 1024px) {
    padding: var(--spacing-200) 0;
    margin-top: 10px;
  }
`;

export const NoteFooter = styled.footer`
  margin-top: 50px;

  color: var(--color-white);
`;

export const TitleInput = styled.input`
  font-size: var(--font-label);
  line-height: 120%;
  letter-spacing: -0.2px;
  font-weight: normal;
  background: transparent;

  color: var(--color-neutral-950);

  padding: 5px;

  outline: 2px solid transparent;
  border: none;

  min-width: 300px;

  font-size: var(--font-body);
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
  font-size: var(--font-caption);

  min-width: 350px;

  color: var(--color-neutral-950);

  font-weight: 500;

  &::placeholder {
    color: var(--color-neutral-400);
  }

  @media (max-width: 1024px) {
    min-width: 100%;
  }
`;

export const MetaInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: start;
  align-items: center;

  gap: 20px;

  margin-bottom: var(--spacing-300);

  @media (max-width: 1024px) {
    grid-template-columns: auto 1fr;
  }
`;

export const LastEdited = styled.span`
  font-size: var(--font-caption);
  line-height: 120%;
  letter-spacing: -0.2px;
  font-weight: normal;
  color: var(--color-neutral-400);

  font-size: var(--font-label);
  font-weight: 500;
`;

export const NoteContent = styled.textarea`
  font-size: var(--font-label);
  line-height: 120%;
  letter-spacing: -0.2px;
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

  @media (max-width: 1024px) {
    min-height: 200px;
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
  font-size: var(--font-label);
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ActionsButton = styled.button`
  color: inherit;

  ${({ disabled }) =>
    disabled
      ? { color: "var(--color-neutral-300);" }
      : { color: "var(--color-blue-500);" }}
`;

export const SaveNote = styled.button`
  font-size: var(--font-label);

  color: inherit;
`;

export const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: var(--spacing-150) var(--spacing-200);
  background: var(--color-blue-500);
  border: none;

  border-radius: 8px;

  color: inherit;

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

const animateToast = keyframes`
  from {
    transform: translateX(80px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  position: fixed;
  right: 64px;
  bottom: 65px;

  background-color: var(--color-neutral-200);

  padding: 8px;
  border-radius: 8px;

  min-width: 250px;

  animation: ${animateToast} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.15);

  & span {
    color: var(--color-base);
    font-size: var(--font-caption);
  }

  & :last-child {
    cursor: pointer;
    margin-left: auto;
  }

  @media (max-width: 1024px) {
    right: 10px;
    bottom: -10px;
  }
`;
