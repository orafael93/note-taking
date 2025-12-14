import { NoteType } from "@/types/note";

export type SearchTerms = "title" | "content" | "tags";

export type StoreNoteType = {
  allNotes: NoteType[];
  filteredNotes: NoteType[];
  searchTerms: SearchTerms[];
};

export type NotesStoreType = {
  notes: StoreNoteType;
  addNote: (note: NoteType) => void;
  deleteNote: (title: string) => void;
  editNote: (title: string, data: Partial<NoteType>) => void;
  toggleArchive: (title: string) => void;
  searchNotes: (query: string, filterBy: "all-notes" | "archived") => void;
  isSearchingNotes: boolean;
  onSearchingNotes: (param: boolean) => void;
  selectedNoteId: string | null;
  onUpdateSelectedNote: (param: string | null) => void;
};
