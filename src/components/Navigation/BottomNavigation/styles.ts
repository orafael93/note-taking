import styled from "styled-components";

export const Nav = styled.nav`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    height: 74px;

    background: var(--color-neutral-0);

    box-shadow: 0 -1px 30px 2px rgba(0, 0, 0, 0.3);

    padding: 12px;

    z-index: 100;
  }
`;

export const NavButton = styled.button<{ active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[50]};

  color: ${({ active }) =>
    active ? "var(--color-blue-500)" : "var(--color-neutral-400)"};

  ${({ theme }) => theme.typography.presets.body2};

  font-size: 12px;

  background-color: ${({ active }) =>
    active ? "var(--color-neutral-100)" : "transparent"};

  padding: 8px 24px;

  border-radius: 2px;
`;
