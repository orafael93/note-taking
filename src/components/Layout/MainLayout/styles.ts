import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 250px auto;

  min-height: 100vh;
  background-color: var(--color-neutral-0);
  color: var(--color-neutral-100);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const LogoWrapper = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MainContent = styled.main`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  @media (max-width: 1024px) {
    height: calc(100dvh - 64px);
    overflow: hidden;

    grid-column: 1 / -1;
  }
`;

export const MainHeaderWrapper = styled.header`
  display: flex;

  justify-content: space-between;

  padding: 30px;

  border-bottom: 2px solid var(--color-neutral-200);

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 258px 1fr;

  border-left: 1px solid var(--color-neutral-200);
  border-right: 1px solid var(--color-neutral-200);

  overflow-y: auto;

  height: 100%;

  @media (max-width: 1024px) {
    height: calc(100dvh - 128px);
    border: none;

    grid-template-columns: 1fr;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid var(--color-neutral-200);
`;

export const Title = styled.h1`
  font-size: var(--font-h-lg);
  line-height: 120%;
  letter-spacing: -0.5px;
  font-weight: bold;
  color: var(--color-neutral-100);
`;

export const SearchInputAndSettingsIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.75rem;
`;

export const SettingsIconWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;
