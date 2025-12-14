import { NoteType } from "@/types/note";

export type NotesStoreType = {
  notes: NoteType[];
  addNote: (note: NoteType) => void;
  deleteNote: (title: string) => void;
  editNote: (title: string, data: Partial<NoteType>) => void;
  toggleArchive: (title: string) => void;
  searchNotes: (query: string) => NoteType[];
  isSearchingNotes: boolean;
  onSearchingNotes: (param: boolean) => void;
  selectedNoteId: string | null;
  onUpdateSelectedNote: (param: string | null) => void;
};
