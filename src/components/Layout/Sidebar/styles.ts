import styled from "styled-components";

export const Container = styled.aside`
  width: 250px;

  background: var(--color-neutral-0);
  padding: ${({ theme }) => theme.spacing[200]};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing[200]};

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  width: fit-content;
  cursor: pointer;

  @media (max-width: 1024px) {
    padding: 20px 30px;
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
  color: ${({ active }) =>
    active === "true"
      ? "var(--color-neutral-700)"
      : "var(--color-neutral-700)"};

  ${({ theme }) => theme.typography.presets.body1}

  text-decoration: none;

  transition: all 0.2s;

  padding: 12px 14px;

  &:hover {
    background: var(--color-neutral-100);
    color: var(--color-neutral-950);
  }
`;

export const TagSection = styled.nav`
  display: flex;
  flex-direction: column;

  gap: ${({ theme }) => theme.spacing[100]};

  padding-top: ${({ theme }) => theme.spacing[200]};

  border-top: 1px solid var(--color-neutral-200);

  h3 {
    ${({ theme }) => theme.typography.presets.heading3};
    color: var(--color-neutral-500);
    padding: 0 ${({ theme }) => theme.spacing[100]};
  }
`;
