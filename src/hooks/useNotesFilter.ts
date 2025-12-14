import { useEffect, useState } from "react";

import { useNotesStore } from "@/store/notes";

type UseNotesFilterType = {
  filterBy: "all-notes" | "archived";
};

export const useNotesFilter = (param: UseNotesFilterType) => {
  const { filterBy } = param;

  const storedNotes = useNotesStore((state) =>
    state.notes.filter((note) =>
      filterBy === "all-notes" ? note : note.isArchived
    )
  );

  const [notes, setNotes] = useState(storedNotes);

  const onNotesFilter = (searchValue: string) => {
    const filteredNotes = storedNotes.filter((currentNote) => {
      const currentNoteContent = [
        currentNote.content,
        currentNote.title,
        currentNote.tags.join(" "),
      ];

      return currentNoteContent.some((currentContent) =>
        currentContent.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    setNotes(filteredNotes);
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
