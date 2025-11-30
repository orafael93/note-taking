import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-bottom: 64px;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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

export const DeleteButton = styled(ActionButton)`
  color: ${({ theme }) => theme.colors.red[500]};
  border-color: ${({ theme }) => theme.colors.red[500]};

  &:hover {
    background: ${({ theme }) => theme.colors.red[500]};
    color: ${({ theme }) => theme.colors.neutral[0]};
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: ${({ theme }) => theme.spacing[200]};
  overflow-y: auto;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.presets.heading1};
  color: ${({ theme }) => theme.colors.neutral[100]};
  margin-bottom: ${({ theme }) => theme.spacing[200]};
`;

export const MetaInfo = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: center;

  gap: 10px 30px;

  margin-bottom: ${({ theme }) => theme.spacing[300]};
`;

export const LastEdited = styled.span`
  ${({ theme }) => theme.typography.presets.body2};
  color: ${({ theme }) => theme.colors.neutral[400]};
`;

export const NoteContent = styled.div`
  ${({ theme }) => theme.typography.presets.body1};
  color: ${({ theme }) => theme.colors.neutral[300]};
  white-space: pre-line;
  line-height: 1.6;
`;
