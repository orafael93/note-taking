import { NoteType } from "@/types/note";

export type NoteActionsType = {
  note: NoteType;
  onArchiveNote: (title: string) => void;
  onDeleteNote: (title: string) => void;
};
