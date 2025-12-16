import styled from "styled-components";

import { OptionType } from "./types";

export const Option = styled.div<Pick<OptionType<string>, "itemIsActive">>`
  padding: 16px;

  display: flex;
  align-items: center;
  gap: 16px;

  background: ${({ itemIsActive }) =>
    itemIsActive ? "var(--color-neutral-100)" : "transparent"};

  border-radius: 8px;

  cursor: pointer;

  & input:last-child {
    margin-left: auto;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;

  background-color: var(--color-neutral-200);

  padding: 10px;
`;
