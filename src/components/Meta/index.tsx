import { Fragment } from "react";

import * as Types from "./types";
import * as S from "./styles";

export const Meta = (props: Types.MetaType) => {
  const { Icon, name, content } = props;

  return (
    <Fragment>
      <S.MetaDescription>
        <Icon size={12} />
        <S.MetaName>{name}</S.MetaName>
      </S.MetaDescription>

      <S.TagItem>{content}</S.TagItem>
    </Fragment>
  );
};
