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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${({ theme }) => theme.spacing[200]};

  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[800]};

  background: ${({ theme }) => theme.colors.neutral[900]};

  @media (max-width: 1024px) {
    position: sticky;
    top: 0;
    z-index: 10;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[75]};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.neutral[300]};
  ${({ theme }) => theme.typography.presets.body1};
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.neutral[100]};
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[100]};
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[75]};
  padding: ${({ theme }) => `${theme.spacing[75]} ${theme.spacing[150]}`};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.neutral[800]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[700]};
  color: ${({ theme }) => theme.colors.neutral[300]};
  ${({ theme }) => theme.typography.presets.body1};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral[700]};
    color: ${({ theme }) => theme.colors.neutral[100]};
  }
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
  position: absolute;
  bottom: 20px;
`;

export const TitleInput = styled.input`
  ${({ theme }) => theme.typography.presets.body1}
  background: transparent;

  color: ${({ theme }) => theme.colors.neutral[100]};

  padding: 5px;

  outline: 2px solid transparent;
  border: none;

  min-width: 300px;

  font-size: 1.5rem;
  font-weight: bold;

  border-radius: 0.5rem;

  padding: 5px;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.blue[500]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[0]};
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const TagsInput = styled(TitleInput)`
  font-size: 0.8rem;

  min-width: 350px;

  color: ${({ theme }) => theme.colors.neutral[100]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[400]};
    font-weight: 500;
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
  color: ${({ theme }) => theme.colors.neutral[400]};

  font-size: 14px;
  font-weight: 500;
`;

export const NoteContent = styled.textarea`
  ${({ theme }) => theme.typography.presets.body1};
  color: ${({ theme }) => theme.colors.neutral[100]};
  font-weight: bold;

  width: 100%;
  height: calc(100dvh - 50%);

  border: none;
  outline: 2px solid transparent;

  background: transparent;

  padding: 10px;

  resize: none;

  &:focus {
    outline-color: ${({ theme }) => theme.colors.blue[500]};
  }

  &::placeholder {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.neutral[300]};
  }
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

  color: ${({ theme }) => theme.colors.neutral[100]};
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

  color: ${({ theme }) => theme.colors.blue[500]};
`;

export const SaveButton = styled.button`
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

  @media (max-width: 1024px) {
    display: none;
  }
`;
