import { TagList } from "@/components/Tag";

import * as Types from "./types";
import * as S from "./styles";

export const NoteCard = ({ note, onClick }: Types.NoteCardType) => {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(note.lastEdited));

  return (
    <S.Container
      onClick={() => {
        onClick();
      }}
    >
      <S.Title>{note.title}</S.Title>
      <S.Footer>
        <TagList tags={note.tags} />
        <S.MetaInfo>
          {note.isArchived && <S.ArchivedBadge>Archived</S.ArchivedBadge>}
          <S.DateText>{formattedDate}</S.DateText>
        </S.MetaInfo>
      </S.Footer>
    </S.Container>
  );
};
