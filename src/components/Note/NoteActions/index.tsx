import { Archive, RotateCcw, Trash2 } from "lucide-react";

import * as Types from "./types";
import * as S from "./styles";

export const NoteActions = (props: Types.NoteActionsType) => {
  const { note, onArchiveNote, onDeleteNote } = props;

  return (
    <S.Container>
      <S.ActionButton onClick={() => onArchiveNote(note.title)}>
        {note.isArchived ? (
          <RotateCcw size={20} strokeWidth={1.5} />
        ) : (
          <Archive size={20} strokeWidth={1.5} />
        )}
        <span>{note.isArchived ? "Restore Note" : "Archive Note"}</span>
      </S.ActionButton>
      <S.DeleteButton onClick={() => onDeleteNote(note.title)}>
        <Trash2 size={20} strokeWidth={1.5} />
        <span>Delete Note</span>
      </S.DeleteButton>
    </S.Container>
  );
};
