import styled from "styled-components";

type InputWrapperType = {
  state?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const InputWrapper = styled.div<InputWrapperType>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6px 10px;

  border-radius: 8px;

  margin-top: 5px;

  gap: 5px;

  border: 1px solid
    ${({ state }) =>
      state === "error" ? "var(--color-red-500)" : "var(--color-neutral-600)"};

  &:focus-within {
    border-color: transparent;

    outline: 2px solid
      ${({ state }) =>
        state === "error" ? "var(--color-red-500)" : "var(--color-blue-500)"};
  }
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 6px;

  font-size: var(--font-label);

  color: var(--color-neutral-950);
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  color: var(--color-neutral-950);

  flex: 1;

  background: transparent;

  font-size: var(--font-label);

  &::placeholder {
    color: var(--color-neutral-500);
  }

  padding: 5px 0;

  font-weight: 500;

  outline: none;
`;
