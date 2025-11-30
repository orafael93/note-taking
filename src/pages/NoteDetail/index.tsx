import { ArrowLeft } from "lucide-react";

import { TagList } from "@/components/Tag/TagList";
import { NoteActions } from "@/components/Note/NoteActions";
import { useNotesStore } from "@/store/notes";

import * as Types from "./types";
import * as S from "./styles";

export const NoteDetail = ({ noteId, onBack }: Types.NoteDetailType) => {
  const note = useNotesStore((state) =>
    state.notes.find((n) => n.title === noteId)
  );

  if (!note) return null;

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(note.lastEdited));

  return (
    <S.Container>
      <S.MainContent>
        <S.Header>
          <S.BackButton onClick={onBack}>
            <ArrowLeft size={20} strokeWidth={1.5} />
            <span>Go Back</span>
          </S.BackButton>
        </S.Header>

        <S.Content>
          <S.Title>{note.title}</S.Title>
          <S.MetaInfo>
            <TagList tags={note.tags} />
            <S.LastEdited>Last edited {formattedDate}</S.LastEdited>
          </S.MetaInfo>
          <S.NoteContent>{note.content}</S.NoteContent>
        </S.Content>
      </S.MainContent>
      <NoteActions noteId={note.title} />
    </S.Container>
  );
};
