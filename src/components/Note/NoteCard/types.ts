import { Note } from "@/types/note";

export type NoteCardType = {
  note: Note;
  onClick: () => void;
};
