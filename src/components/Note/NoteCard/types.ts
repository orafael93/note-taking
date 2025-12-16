import { NoteType } from "@/types/note";

export type NoteCardType = {
  note: NoteType;
  onClick: () => void;
  isActive?: boolean;
  isLastItem?: boolean;
};
