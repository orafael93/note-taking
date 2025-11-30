import styled from "styled-components";

export const MetaDescription = styled.div`
  display: flex;
  gap: 6px;
`;

export const MetaName = styled.span`
  font-size: 12px;
`;

export const TagItem = styled.span`
  color: ${({ theme }) => theme.colors.neutral[100]};
  font-size: 0.9rem;
`;
