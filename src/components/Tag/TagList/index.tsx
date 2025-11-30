import * as Types from "./types";
import * as S from "./styles";

export const TagList = (props: Types.TagListType) => {
  const { tags } = props;

  return (
    <S.Container>
      {tags.map((tag) => (
        <S.Tag key={tag}>{tag}</S.Tag>
      ))}
    </S.Container>
  );
};
