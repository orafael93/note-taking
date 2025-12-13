import styled from "styled-components";

export const MetaDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const MetaName = styled.span`
  font-size: 14px;

  color: ${({ theme }) => theme.colors.neutral[300]};
`;

export const TagItem = styled.span`
  color: ${({ theme }) => theme.colors.neutral[100]};
  font-size: 0.9rem;
`;
