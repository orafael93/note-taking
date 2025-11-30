import { Plus } from "lucide-react";

import { NoteCard } from "@/components/Note/NoteCard";
import { useNotesStore } from "@/store/notes";

import * as Types from "./types";
import * as S from "./styles";

export const Home = (props: Types.HomeType) => {
  const { onNoteSelect } = props;

  const notes = useNotesStore((state) =>
    state.notes.filter((note) => !note.isArchived)
  );

  return (
    <S.Container>
      <S.CreateButton style={{ marginBottom: "16px" }}>
        <Plus size={20} />
        Create New Note
      </S.CreateButton>

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
