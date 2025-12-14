import { create } from "zustand";

import notesData from "@/data.json";

import { NoteType } from "@/types/note";
import { NotesStoreType, SearchTerms } from "@/store/types";

export const useNotesStore = create<NotesStoreType>((set, get) => ({
  notes: {
    allNotes: notesData.notes,
    filteredNotes: [],
    searchTerms: [],
  },
  getNotes: (page) => {
    const filteredNotesByPage =
      page === "all-notes"
        ? get().notes.allNotes
        : get().notes.allNotes.filter((note) => note.isArchived);

    const hasSearch =
      get().notes.searchTerms.length && get().notes.filteredNotes.length;

    return hasSearch ? get().notes.filteredNotes : filteredNotesByPage;
  },
  addNote: (note) =>
    set((state) => ({
      notes: {
        allNotes: [...state.notes.allNotes, note],
        filteredNotes: [...state.notes.filteredNotes],
        searchTerms: [],
      },
    })),
  deleteNote: (title) =>
    set((state) => ({
      notes: {
        allNotes: state.notes.allNotes.filter((note) => note.title !== title),
        filteredNotes: state.notes.allNotes.filter(
          (note) => note.title !== title
        ),
        searchTerms: [],
      },
    })),
  editNote: (title, data) =>
    set((state) => ({
      notes: {
        allNotes: state.notes.allNotes.map((note) =>
          note.title === title
            ? { ...note, ...data, lastEdited: new Date().toISOString() }
            : note
        ),
        filteredNotes: [],
        searchTerms: [],
      },
    })),
  toggleArchive: (title) =>
    set((state) => ({
      notes: {
        allNotes: state.notes.allNotes.map((note) =>
          note.title === title
            ? { ...note, isArchived: !note.isArchived }
            : note
        ),
        filteredNotes: [],
        searchTerms: [],
      },
    })),
  searchNotes: (query, filterBy) => {
    const state = get();
    const search = query.toLowerCase();

    const filteredNotesByPage =
      filterBy === "all-notes"
        ? state.notes.allNotes
        : state.notes.allNotes.filter((currentNote) => currentNote.isArchived);

    if (!search) {
      return set((state) => ({
        notes: {
          allNotes: state.notes.allNotes,
          filteredNotes: filteredNotesByPage,
          searchTerms: [],
        },
      }));
    }

    let filteredNotes: NoteType[] = [];
    let searchTerms: SearchTerms[] = [];

    for (let i = 0; i < filteredNotesByPage.length; i++) {
      const currentNote = filteredNotesByPage[i];

      if (currentNote.content.toLowerCase().includes(search)) {
        filteredNotes = filteredNotesByPage.filter((currentNote) =>
          currentNote.content.toLowerCase().includes(search)
        );
        searchTerms.push("content");
        break;
      }

      if (currentNote.title.toLowerCase().includes(search)) {
        filteredNotes = filteredNotesByPage.filter((currentNote) =>
          currentNote.title.toLowerCase().includes(search)
        );
        searchTerms.push("title");
        break;
      }

      if (currentNote.tags.join(",").toLowerCase().includes(search)) {
        filteredNotes = filteredNotesByPage.filter((currentNote) =>
          currentNote.tags.join(",").toLowerCase().includes(search)
        );
        searchTerms.push("tags");
        break;
      }
    }

    return set((state) => ({
      notes: {
        allNotes: state.notes.allNotes,
        filteredNotes,
        searchTerms,
      },
    }));
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
