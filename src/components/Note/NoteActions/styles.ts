import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  min-width: 250px;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[100]};

  padding: ${({ theme }) => theme.spacing[200]};
  border-left: 1px solid ${({ theme }) => theme.colors.neutral[800]};

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[100]};
  padding: ${({ theme }) => theme.spacing[100]};

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
  color: ${({ theme }) => theme.colors.neutral[300]};
  border-color: ${({ theme }) => theme.colors.neutral[800]};

  &:hover {
    background: ${({ theme }) => theme.colors.neutral[700]};
    color: ${({ theme }) => theme.colors.neutral[0]};
  }
`;
