import * as Types from "./types";
import * as S from "./styles";

const Description = ({ Icon, name }: Types.DescriptionType) => (
  <S.MetaDescription>
    <Icon size={14} />
    <S.MetaName>{name}</S.MetaName>
  </S.MetaDescription>
);

const Tag = ({ content }: Types.TagType) => <S.TagItem>{content}</S.TagItem>;

export const Meta = () => null;

Meta.Tag = Tag;
Meta.Description = Description;
