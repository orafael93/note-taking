import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6px 10px;

  border-radius: 8px;

  margin-top: 5px;

  gap: 5px;

  border: 1px solid var(--color-neutral-600);

  &:focus-within {
    border-color: transparent;
    outline: 2px solid var(--color-blue-500);
  }
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 6px;

  font-size: var(--font-label);

  color: var(--color-white);
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  color: var(--color-white);

  flex: 1;

  background: transparent;

  font-size: var(--font-body);

  padding: 5px 0;

  outline: none;

  font-weight: 500;
`;
