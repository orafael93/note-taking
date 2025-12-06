import { useRef } from "react";

import { Logo } from "@/components/Logo";
import { Sidebar } from "@/components/Layout/Sidebar";
import { AllNotes } from "@/pages/AllNotes";
import { NoteDetail } from "@/pages/NoteDetail";
import { SearchInput } from "@/components/SearchInput";
import { useNotesStore } from "@/store/notes";
import { BottomNavigation } from "@/components/Navigation/BottomNavigation";

import * as S from "./styles";

export const MainLayout = () => {
  const selectedNoteId = useNotesStore((state) => state.selectedNoteId);
  const onUpdateSelectedNote = useNotesStore(
    (state) => state.onUpdateSelectedNote
  );

  const contentWrapperRef = useRef<HTMLDivElement | null>(null);

  const handleSelectNote = (noteId: string) => {
    contentWrapperRef.current?.scrollTo({
      top: 0,
    });

    onUpdateSelectedNote(noteId);
  };

  const handleCloseNote = () => {
    onUpdateSelectedNote(null);
  };

  return (
    <S.Container>
      <Sidebar />
      <S.MainContent>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>

        <S.MainHeaderWrapper>
          <S.Header>
            <S.Title>All Notes</S.Title>
          </S.Header>

          <SearchInput />
        </S.MainHeaderWrapper>

        <S.ContentWrapper ref={contentWrapperRef}>
          {selectedNoteId && window.innerWidth <= 1024 ? null : (
            <AllNotes onNoteSelect={handleSelectNote} />
          )}

          {selectedNoteId && (
            <NoteDetail
              noteId={selectedNoteId}
              onBack={handleCloseNote}
              key={selectedNoteId}
            />
          )}
        </S.ContentWrapper>
      </S.MainContent>
      <BottomNavigation />
    </S.Container>
  );
};
