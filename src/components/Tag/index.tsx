import * as Types from "./types";
import * as S from "./styles";

export const TagList = (props: Types.TagListType) => {
  const { tags } = props;

  return (
    <S.TagContainer>
      {tags.map((tag) => (
        <S.TagItem key={tag}>{tag}</S.TagItem>
      ))}
    </S.TagContainer>
  );
};
