import styled from "styled-components";

export const Nav = styled.nav`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 64px;
    background: ${({ theme }) => theme.colors.neutral[950]};
    border-top: 1px solid ${({ theme }) => theme.colors.neutral[800]};
    justify-content: space-around;
    align-items: center;
    padding: ${({ theme }) => theme.spacing[100]};
    z-index: 100;
  }
`;

export const NavButton = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  color: ${({ theme, active }) =>
    active ? theme.colors.blue[500] : theme.colors.neutral[400]};
  ${({ theme }) => theme.typography.presets.body2}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[50]};
  font-size: 12px;
`; 