import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100vw - 15px);

  position: fixed;
  top: 0;
  left: 0;
  right: 15px;
  bottom: 0;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 99;
`;

export const ChildrenWrapper = styled.div``;
