import styled from "styled-components";

export const Container = styled.aside`
  width: 250px;
  background: ${({ theme }) => theme.colors.neutral[950]};
  padding: ${({ theme }) => theme.spacing[200]};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[200]};

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const NavSection = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[75]};
`;

export const NavItem = styled.button<{ active?: string }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[100]};

  background: transparent;
  border: none;

  border-radius: 4px;
  color: ${({ theme, active }) =>
    active === "true" ? theme.colors.neutral[100] : theme.colors.neutral[200]};
  ${({ theme }) => theme.typography.presets.body1}

  text-decoration: none;

  transition: all 0.2s;

  padding: 12px 14px;

  &:hover {
    background: ${({ theme }) => theme.colors.neutral[800]};
    color: ${({ theme }) => theme.colors.neutral[100]};
  }
`;

export const TagSection = styled.nav`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing[100]};

  padding-top: ${({ theme }) => theme.spacing[200]};

  border-top: 1px solid ${({ theme }) => theme.colors.neutral[800]};

  h3 {
    ${({ theme }) => theme.typography.presets.heading3}
    color: ${({ theme }) => theme.colors.neutral[400]};
    padding: 0 ${({ theme }) => theme.spacing[100]};
  }
`;
