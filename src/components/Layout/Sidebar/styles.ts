import styled from "styled-components";

export const Container = styled.aside`
  width: 250px;

  background: var(--color-neutral-0);
  padding: var(--spacing-200);

  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  width: fit-content;
  cursor: pointer;

  @media (max-width: 1024px) {
    padding: 13px 16px;
  }
`;

export const NavSection = styled.nav`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-75);
`;

export const NavItem = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: var(--spacing-100);

  background: transparent;
  border: none;

  border-radius: 4px;

  color: ${({ active }) =>
    active ? "var(--color-base)" : "var(--color-neutral-700)"};

  background-color: ${({ active }) =>
    active ? "var(--color-neutral-100)" : "transparent"};

  font-size: var(--font-label);
  line-height: 120%;
  letter-spacing: -0.2px;
  font-weight: normal;

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

  gap: var(--spacing-100);

  padding-top: var(--spacing-200);

  border-top: 1px solid var(--color-neutral-200);

  h3 {
  font-size: var(--font-body);
  line-height: 120%;
  letter-spacing: -0.3px;
  font-weight: 600;
    color: var(--color-neutral-500);
    padding: 0 var(--spacing-100);
  }
`;
