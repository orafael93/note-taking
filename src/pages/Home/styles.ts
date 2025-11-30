import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  padding: ${({ theme }) => theme.spacing[200]};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing[200]};
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
  gap: ${({ theme }) => theme.spacing[100]};

  padding: ${({ theme }) => `${theme.spacing[100]} ${theme.spacing[200]}`};
  background: ${({ theme }) => theme.colors.blue[500]};
  border: none;

  border-radius: 8px;

  color: ${({ theme }) => theme.colors.neutral[0]};

  ${({ theme }) => theme.typography.presets.body1};

  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.blue[700]};
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
  overflow-y: auto;
`;
