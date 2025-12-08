import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  background: #2b303b;

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

  background: #0e121b;

  border-radius: 16px;

  padding: 48px;

  box-shadow: 2px 2px 10px 4px rgba(0, 0, 0, 0.3);

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

  padding: ${({ theme }) => `${theme.spacing[150]} ${theme.spacing[200]}`};
  background: ${({ theme }) => theme.colors.blue[500]};
  border: none;

  border-radius: 8px;

  color: ${({ theme }) => theme.colors.neutral[0]};

  font-weight: bold;

  cursor: pointer;

  transition: background-color 0.2s;

  width: 100%;

  &:hover {
    background: ${({ theme }) => theme.colors.blue[700]};
  }
`;

export const OutlineButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: ${({ theme }) => `${theme.spacing[150]} ${theme.spacing[200]}`};
  background: transparent;
  border: none;

  border-radius: 8px;

  color: ${({ theme }) => theme.colors.neutral[0]};

  font-weight: bold;

  cursor: pointer;

  transition: background-color 0.2s;

  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.neutral[600]};

  &:hover {
    background: ${({ theme }) => theme.colors.blue[700]};
  }
`;
