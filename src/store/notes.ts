import { create } from "zustand";

import notesData from "@/data.json";
import { NoteType } from "@/types/note";

type NotesStoreType = {
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

export const useNotesStore = create<NotesStoreType>((set, get) => ({
  notes: notesData.notes,
  addNote: (note) =>
    set((state) => ({
      notes: [...state.notes, note],
    })),
  deleteNote: (title) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.title !== title),
    })),
  editNote: (title, data) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.title === title
          ? { ...note, ...data, lastEdited: new Date().toISOString() }
          : note
      ),
    })),
  toggleArchive: (title) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.title === title ? { ...note, isArchived: !note.isArchived } : note
      ),
    })),
  searchNotes: (query) => {
    const state = get();
    const searchTerm = query.toLowerCase();

    return state.notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchTerm) ||
        note.content.toLowerCase().includes(searchTerm) ||
        note.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    );
  },
  isSearchingNotes: false,
  onSearchingNotes: (isSearching) =>
    set(() => ({
      isSearchingNotes: isSearching,
    })),
  selectedNoteId: null,
  onUpdateSelectedNote: (selectedNoteId) =>
    set(() => ({
      selectedNoteId,
    })),
}));
