import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 6px 10px;

  border-radius: 8px;

  margin-top: 5px;

  gap: 5px;

  border: 1px solid #525866;

  outline: 2px solid transparent;

  &:focus-within {
    outline-color: ${({ theme }) => theme.colors.blue[500]};
  }
`;

export const InputLabel = styled.label`
  display: flex;
  flex-direction: column;

  margin-bottom: 6px;
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
}))`
  color: #fff;

  flex: 1;

  background: transparent;

  font-size: 0.85rem;

  font-weight: 500;
  border: none;
  outline: none;
`;
