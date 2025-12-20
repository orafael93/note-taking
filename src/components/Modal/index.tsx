import * as Types from "./types";
import * as S from "./styles";

export const Modal = (props: Types.ModalType) => {
  const { children } = props;

  return (
    <S.Wrapper>
      <div>{children}</div>
    </S.Wrapper>
  );
};
