import { useState } from "react";

import { Home } from "@/pages/Home";
import { NoteDetail } from "@/pages/NoteDetail";
import { MainLayout } from "@/components/Layout/MainLayout";
import { ThemeProvider } from "@/styles/ThemeProvider";

export const App = () => {
  const [selectedNoteId, setSelectedNoteId] = useState<string | null>(null);

  const handleNoteSelect = (noteId: string) => {
    setSelectedNoteId(noteId);
  };

  const handleNoteClose = () => {
    setSelectedNoteId(null);
  };

  return (
    <ThemeProvider>
      <MainLayout
        rightContent={
          selectedNoteId ? (
            <NoteDetail noteId={selectedNoteId} onBack={handleNoteClose} />
          ) : null
        }
      >
        <Home onNoteSelect={handleNoteSelect} />
      </MainLayout>
    </ThemeProvider>
  );
};
