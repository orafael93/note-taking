import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background: var(--color-neutral-200);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 200;

  overflow-y: auto;
`;

export const Content = styled.div`
  max-width: 540px;

  margin: 140px auto 0;

  background: var(--color-neutral-100);

  border-radius: 16px;

  padding: 48px;

  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 95%;

    padding: 48px 16px;

    margin: 97px auto;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: var(--spacing-150) var(--spacing-200);
  background: var(--color-blue-500);
  border: none;

  border-radius: 8px;

  color: var(--color-neutral-0);

  font-weight: bold;

  cursor: pointer;

  transition: background-color 0.2s;

  width: 100%;

  &:focus-visible {
    outline-color: var(--color-white);
    outline-offset: -3px;
  }

  &:hover {
    background: var(--color-blue-500);
    color: var(--color-white);
  }
`;

export const OutlineButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: var(--spacing-150) var(--spacing-200);
  background: transparent;
  border: none;

  border-radius: 8px;

  color: var(--color-neutral-0);

  font-weight: bold;

  cursor: pointer;

  transition: background-color 0.2s;

  width: 100%;

  border: 1px solid var(--color-neutral-600);

  color: var(--color-neutral-950);

  &:hover {
    background: var(--color-blue-500);
    color: var(--color-white);
  }

  &:hover .google-icon {
    fill: var(--color-white);
  }

  & .google-icon {
    fill: var(--color-base);
  }
`;

export const NoAccountText = styled.p`
  margin-top: 32px;
  font-weight: 300;

  text-align: center;
  font-size: var(--font-label);
  color: var(--color-neutral-950);

  & button {
    color: inherit;
  }
`;

export const ErrorMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  margin-top: 6px;

  & span {
    color: var(--color-red-500);
    font-size: var(--font-caption);
  }
`;
