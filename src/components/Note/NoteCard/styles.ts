import styled from "styled-components";

type ContainerTypes = {
  isActive?: boolean;
  isLastItem?: boolean;
};

export const Container = styled.button<ContainerTypes>`
  width: 100%;

  text-align: left;

  padding: 12px 10px;

  margin-bottom: ${({ theme }) => theme.spacing[100]};

  background: ${({ isActive }) =>
    isActive ? "var(--color-neutral-100)" : "transparent"};

  border-radius: 8px;

  cursor: pointer;

  &:hover {
    background: var(--color-neutral-100);
  }

  &:focus-visible {
    outline-color: var(--color-blue-500);
  }

  @media (max-width: 1024px) {
    background: transparent;

    border-radius: 0;

    border-bottom: 2px solid
      ${({ isLastItem }) =>
        isLastItem ? "transparent" : "var(--color-neutral-200)"};
  }
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.presets.heading2}
  color: var(--color-base);

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
  ${({ theme }) => theme.typography.presets.body2};
  color: var(--color-neutral-700);
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

  background: var(--color-neutral-700);

  border: 1px solid var(--color-neutral-600);

  color: var(--color-neutral-300);

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background: var(--color-neutral-600);
    color: var(--color-neutral-100);
  }
`;

export const DeleteButton = styled(ActionButton)`
  color: var(--color-red-500);
  border-color: var(--color-red-500);

  &:hover {
    background: var(--color-red-500);
    color: var(--color-neutral-0);
  }
`;
