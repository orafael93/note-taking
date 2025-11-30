import { Plus } from "lucide-react";

import { NoteCard } from "@/components/Note/NoteCard";
import { useNotesStore } from "@/store/notes";

import * as Types from "./types";
import * as S from "./styles";

export const AllNotes = (props: Types.AllNotesType) => {
  const { onNoteSelect } = props;

  const notes = useNotesStore((state) =>
    state.notes.filter((note) => !note.isArchived)
  );

  return (
    <S.Container>
      <S.CreateButton style={{ marginBottom: "16px" }}>
        <Plus size={16} strokeWidth={3} />
        Create New Note
      </S.CreateButton>

      <S.TitleWrapper>
        <S.Title>All Notes</S.Title>
      </S.TitleWrapper>

      <S.NotesList>
        {notes.map((note) => (
          <NoteCard
            key={note.title}
            note={note}
            onClick={() => onNoteSelect(note.title)}
          />
        ))}
      </S.NotesList>
    </S.Container>
  );
};
