import styled from "styled-components";

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[50]};
`;

export const TagItem = styled.span`
  ${({ theme }) => theme.typography.presets.body2}
  background: ${({ theme }) => theme.colors.neutral[600]};
  color: ${({ theme }) => theme.colors.neutral[100]};

  padding: ${({ theme }) => `${theme.spacing[25]} ${theme.spacing[75]}`};

  border-radius: 4px;
`;
