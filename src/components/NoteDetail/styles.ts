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
  flex: 1;
  display: flex;
  flex-direction: column;

  animation: ${translateContent} 0.8s forwards
    cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: var(--spacing-200);
  border-bottom: 1px solid var(--color-neutral-800);
  background: var(--color-neutral-900);

  @media (max-width: 1024px) {
    position: sticky;
    top: 0;
    z-index: 10;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-75);
  background: none;
  border: none;
  color: var(--color-neutral-300);

  font-size: var(--font-label);
  line-height: 120%;
  letter-spacing: -0.2px;
  font-weight: normal;

  cursor: pointer;

  transition: color 0.2s;

  &:hover {
    color: var(--color-neutral-100);
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: var(--spacing-100);
`;

export const Content = styled.div`
  position: relative;

  flex: 1;
  padding: var(--spacing-200);
  overflow-y: auto;

  @media (max-width: 1024px) {
    padding: var(--spacing-200) 0;
    margin-top: 10px;
  }
`;

export const NoteFooter = styled.footer`
  position: absolute;
  bottom: 20px;
`;

export const Title = styled.h1`
  font-size: var(--font-h-lg);
  line-height: 120%;
  letter-spacing: -0.5px;
  font-weight: bold;

  color: var(--color-neutral-950);

  margin-bottom: var(--spacing-200);
`;

export const MetaInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: center;

  gap: 10px 30px;

  margin-bottom: var(--spacing-300);
`;

export const LastEdited = styled.span`
  font-size: var(--font-caption);
  line-height: 120%;
  letter-spacing: -0.2px;
  font-weight: normal;
  color: var(--color-neutral-400);
`;

export const NoteContent = styled.div`
  font-size: var(--font-label);
  line-height: 120%;
  letter-spacing: -0.2px;
  font-weight: normal;
  color: var(--color-neutral-800);

  white-space: pre-line;
  line-height: 1.6;
`;

export const MobileCardHeader = styled.div`
  display: none;

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

  color: var(--color-neutral-600);
`;

export const CancelText = styled.span`
  font-size: var(--font-label);
`;

export const SaveNote = styled.span`
  font-size: var(--font-label);

  color: var(--color-blue-500);
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

  color: var(--color-white);

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

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-75);

  padding: var(--spacing-75) var(--spacing-150);

  border-radius: 4px;

  background: var(--color-neutral-800);

  border: 1px solid var(--color-neutral-700);

  color: var(--color-neutral-300);

  font-size: var(--font-label);
  line-height: 120%;
  letter-spacing: -0.2px;
  font-weight: normal;

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--color-neutral-700);
    color: var(--color-neutral-100);
  }
`;

export const DeleteButton = styled(ActionButton)`
  background: var(--color-red-500);
  color: var(--color-white);

  border: none;
  padding: 12px;

  &:focus-visible {
    outline-color: var(--color-white);
  }
`;

export const CancelButton = styled(ActionButton)`
  background: var(--color-neutral-300);
  color: var(--color-neutral-800);

  border: none;
  padding: 12px;

  &:focus-visible {
    outline-color: var(--color-white);
  }
`;

export const ArchiveButton = styled(ActionButton)`
  background: var(--color-blue-500);
  color: var(--color-white);

  padding: 12px;

  border: none;

  &:focus-visible {
    outline-color: var(--color-white);
  }
`;

const animateMainContentWrapper = keyframes`
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalContentWrapper = styled.div`
  width: clamp(290px, 50vw, 440px);

  background: var(--color-neutral-200);

  border-radius: 8px;
  border: 1px solid rgb(from var(--color-neutral-600) r g b / 0.3);

  animation: ${animateMainContentWrapper} 0.2s
    cubic-bezier(0.175, 0.885, 0.32, 1.275);

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const ModalMainContentWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 16px;

  color: var(--color-white);

  padding: 20px;

  border-bottom: 1px solid rgb(from var(--color-neutral-600) r g b / 0.3);

  & p:first-child {
    font-size: var(--font-body);

    font-weight: 600;

    color: var(--color-neutral-950);
  }

  & p:last-child {
    font-size: var(--font-label);

    margin-top: 6px;

    font-weight: 500;

    color: var(--color-neutral-700);
  }
`;

export const TrashIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;

  border-radius: 8px;

  background-color: var(--color-neutral-400);
`;

export const ModalActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;

  padding: 16px 20px;
`;

export const ActionsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-white);
`;
