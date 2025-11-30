import { useState } from "react";

import { AllNotes } from "@/pages/AllNotes";
import { NoteDetail } from "@/pages/NoteDetail";
import { MainLayout } from "@/components/Layout/MainLayout";
import { ThemeProvider } from "@/styles/ThemeProvider";

export const App = () => {
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

  const handleNoteSelect = (noteId: string) => {
    setSelectedNoteId(noteId);
  };

  const handleCloseNote = () => {
    setSelectedNoteId(null);
  };

  return (
    <ThemeProvider>
      <MainLayout
        selectedNoteId={selectedNoteId}
        handleCloseNote={handleCloseNote}
      >
        {selectedNoteId && window.innerWidth <= 1024 ? null : (
          <AllNotes onNoteSelect={handleNoteSelect} />
        )}

        {selectedNoteId && (
          <NoteDetail noteId={selectedNoteId} onBack={handleCloseNote} />
        )}
      </MainLayout>
    </ThemeProvider>
  );
};
