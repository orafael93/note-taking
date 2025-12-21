import styled from "styled-components";

export const Button = styled.button`
  background: var(--color-blue-500);
  color: var(--color-neutral-0);

  padding: var(--spacing-100) var(--spacing-200);

  border: none;
  border-radius: 4px;

  font-weight: 600;

  &:hover {
    background: var(--color-blue-500);
  }
`;
