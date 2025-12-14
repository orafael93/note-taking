import styled from "styled-components";

type ContainerTypes = {
  isActive?: boolean;
};

export const Container = styled.button<ContainerTypes>`
  width: 100%;

  text-align: left;

  padding: ${({ theme }) => theme.spacing[150]};

  margin-bottom: ${({ theme }) => theme.spacing[100]};

  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.neutral[800] : "transparent"};

  border-radius: 8px;

  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral[700]};
  }

  &:focus-visible {
    outline-color: ${({ theme }) => theme.colors.blue[500]};
  }

  @media (max-width: 1024px) {
    background: transparent;

    border-bottom: 2px solid ${({ theme }) => theme.colors.neutral[800]};
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.presets.heading2}
  color: ${({ theme }) => theme.colors.neutral[100]};
  margin-bottom: ${({ theme }) => theme.spacing[100]};
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[75]};
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[100]};
`;

export const DateText = styled.span`
  ${({ theme }) => theme.typography.presets.body2}
  color: ${({ theme }) => theme.colors.neutral[400]};
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[75]};
  opacity: 0;
  transition: opacity 0.2s;

  ${Container}:hover & {
    opacity: 1;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.neutral[700]};
  border: 1px solid ${({ theme }) => theme.colors.neutral[600]};
  color: ${({ theme }) => theme.colors.neutral[300]};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral[600]};
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
