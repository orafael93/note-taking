import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  min-width: 250px;

  display: flex;
  flex-direction: column;
  gap: var(--spacing-100);

  padding: var(--spacing-200);
  border-left: 1px solid var(--color-neutral-200);

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-100);

  border-radius: 4px;
  background: transparent;

  border: 1px solid var(--color-neutral-600);

  color: var(--color-base);

  cursor: pointer;
  transition: all 0.2s;

  &:focus-visible {
    border-color: transparent;
  }

  &:hover {
    background: var(--color-neutral-700);
    color: var(--color-neutral-100);
  }
`;

export const DeleteButton = styled(ActionButton)`
  color: var(--color-base);

  border-color: var(--color-neutral-800);

  &:hover {
    background: var(--color-neutral-700);
    color: var(--color-neutral-0);
  }
`;
