import styled from "styled-components";

import { OptionType } from "./types";

export const Option = styled.div<Pick<OptionType<string>, "itemIsActive">>`
  padding: 16px;

  display: flex;
  align-items: center;
  gap: 16px;

  background: ${({ theme, itemIsActive }) =>
    itemIsActive ? theme.colors.neutral[800] : "transparent"};

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

  background: ${({ theme }) => theme.colors.neutral[950]};

  padding: 10px;
`;
