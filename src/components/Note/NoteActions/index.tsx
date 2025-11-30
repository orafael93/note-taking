import { Archive, Trash2 } from "lucide-react";

import { useNotesStore } from "@/store/notes";

import * as Types from "./types";
import * as S from "./styles";

export const NoteActions = ({ noteId }: Types.NoteActionsType) => {
  const toggleArchive = useNotesStore((state) => state.toggleArchive);
  const deleteNote = useNotesStore((state) => state.deleteNote);

  return (
    <S.Container>
      <S.ActionButton onClick={() => toggleArchive(noteId)}>
        <Archive size={20} strokeWidth={1.5} />
        <span>Archive Note</span>
      </S.ActionButton>
      <S.DeleteButton onClick={() => deleteNote(noteId)}>
        <Trash2 size={20} strokeWidth={1.5} />
        <span>Delete Note</span>
      </S.DeleteButton>
    </S.Container>
  );
};
