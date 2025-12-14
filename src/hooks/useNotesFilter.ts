import { useState } from "react";

import { useNotesStore } from "@/store/notes";

export const useNotesFilter = () => {
  const storedNotes = useNotesStore((state) =>
    state.notes.filter((note) => !note.isArchived)
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

  return {
    notes,
    onNotesFilter,
  };
};
