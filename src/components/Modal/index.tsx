import * as Types from "./types";
import * as S from "./styles";

export const Modal = (props: Types.ModalType) => {
  const { children } = props;

  return (
    <S.Wrapper>
      <S.ContentWrapper>{children}</S.ContentWrapper>
    </S.Wrapper>
  );
};
