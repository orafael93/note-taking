import styled from "styled-components";

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-50);
`;

export const TagItem = styled.span`
  background-color: var(--color-neutral-300);
  color: var(--color-base);

  padding: var(--spacing-25) var(--spacing-75);

  border-radius: 4px;
`;
