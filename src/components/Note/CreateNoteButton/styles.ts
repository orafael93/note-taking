import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing[400]};
  right: ${({ theme }) => theme.spacing[400]};

  width: 56px;
  height: 56px;
  border-radius: 50%;

  background: var(--color-blue-500);
  border: none;
  color: var(--color-neutral-0);

  display: flex;
  font-size: var(--font-h-lg);

  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  cursor: pointer;

  transition: transform 0.2s;
  z-index: 101;

  @media (max-width: 768px) {
    bottom: 84px;
  }

  &:hover {
    transform: scale(1.05);
    background: var(--color-blue-500);
  }
`;
