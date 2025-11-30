import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[50]};
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  ${({ theme }) => theme.typography.presets.body2}
  background: ${({ theme }) => theme.colors.neutral[700]};
  color: ${({ theme }) => theme.colors.neutral[300]};
  padding: ${({ theme }) => `${theme.spacing[25]} ${theme.spacing[75]}`};
  border-radius: 4px;
`; 