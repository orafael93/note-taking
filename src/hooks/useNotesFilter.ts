import { useEffect, useState } from "react";

import { useNotesStore } from "@/store/notes";
import type { NotesStoreType } from "@/store/types";

type FilterByType = "all-notes" | "archived";

export const useNotesFilter = (param: { filterBy: FilterByType }) => {
  const { filterBy } = param;

  const getNotesByFilter = (filter: FilterByType, store: NotesStoreType) => {
    const filteredNotesByPage =
      filter === "all-notes"
        ? store.notes.allNotes
        : store.notes.allNotes.filter((currentNote) => currentNote.isArchived);

    const hasSearch =
      store.notes.searchTerms.length && store.notes.filteredNotes.length;

    return hasSearch ? store.notes.filteredNotes : filteredNotesByPage;
  };

  const storedNotes = useNotesStore((state) =>
    getNotesByFilter(filterBy, state)
  );

  const searchNotes = useNotesStore((state) => state.searchNotes);

  const [notes, setNotes] = useState(storedNotes);

  const onNotesFilter = (searchValue: string) => {
    searchNotes(searchValue, filterBy);
  };

  useEffect(() => {
    if (storedNotes.length !== notes.length) {
      setNotes(storedNotes);
    }
  }, [storedNotes.length]);

  return {
    notes,
    onNotesFilter,
  };
};
